interface LoginResponse {
  ret: number;
  data: (LoginData | false)[];
  msg: string;
}

interface UserInfo {
  id: string;
  nickname: string;
  title: string;
  smallAvatar: string;
  mediumAvatar: string;
  largeAvatar: string;
  email: string;
}

interface LoginData {
  edu_user: {
    token: string;
    user: UserInfo;
  };
  qa_user: {
    id: string;
    token: string;
    username: string;
    level: string;
    type: string;
  };
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await fetch("/api/site/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error("登录请求失败:", error);
    throw error;
  }
};

export const isLoginSuccess = (response: LoginResponse): boolean => {
  return (
    response.ret === 200 &&
    response.data.length > 0 &&
    response.data[0] !== false
  );
};

export const getLoginData = (response: LoginResponse): LoginData | null => {
  if (isLoginSuccess(response)) {
    return response.data[0] as LoginData;
  }
  return null;
};

export const saveUserToken = (token: string) => {
  localStorage.setItem("userToken", token);
};

export const getUserToken = (): string | null => {
  return localStorage.getItem("userToken");
};

export const removeUserToken = () => {
  localStorage.removeItem("userToken");
};

export const isUserLoggedIn = (): boolean => {
  return !!getUserToken();
};

export const saveUserInfo = (userInfo: {
  nickname: string;
  title: string;
  avatar: string;
}) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const getUserInfo = () => {
  const userInfoStr = localStorage.getItem("userInfo");
  if (userInfoStr) {
    try {
      return JSON.parse(userInfoStr);
    } catch (error) {
      console.error("解析用户信息失败:", error);
      return null;
    }
  }
  return null;
};

export const removeUserInfo = () => {
  localStorage.removeItem("userInfo");
};
