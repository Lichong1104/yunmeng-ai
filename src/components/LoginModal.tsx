import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import {
  login,
  isLoginSuccess,
  getLoginData,
  saveUserToken,
  saveUserInfo,
} from "@/services/auth";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: LoginModalProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setErrorMessage("请输入用户名和密码");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await login(username, password);

      if (isLoginSuccess(response)) {
        const loginData = getLoginData(response);
        if (loginData) {
          saveUserToken(loginData.edu_user.token);
          saveUserInfo({
            nickname: loginData.edu_user.user.nickname,
            title: loginData.edu_user.user.title,
            avatar: loginData.edu_user.user.smallAvatar,
          });
          setSuccessMessage(`欢迎回来，${loginData.edu_user.user.nickname}！`);
          setTimeout(() => {
            onLoginSuccess();
            onClose();
          }, 1500);
        }
      } else {
        setErrorMessage("用户名或密码错误，请重试");
      }
    } catch (error) {
      setErrorMessage("登录失败，请检查网络连接");
      console.error("登录错误:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setErrorMessage("");
    setSuccessMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mt-[40vh]">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* 模态框 */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* 标题 */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">登录</h2>
          <p className="text-gray-600 mt-2">欢迎回到云梦AI</p>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-gray-700">
              用户名
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入用户名"
              className="mt-1"
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-gray-700">
              密码
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              className="mt-1"
              disabled={isLoading}
            />
          </div>

          {/* 错误信息 */}
          {errorMessage && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
              <AlertCircle size={16} />
              <span className="text-sm">{errorMessage}</span>
            </div>
          )}

          {/* 成功信息 */}
          {successMessage && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
              <CheckCircle size={16} />
              <span className="text-sm">{successMessage}</span>
            </div>
          )}

          {/* 登录按钮 */}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                登录中...
              </>
            ) : (
              "登录"
            )}
          </Button>
        </form>

        {/* 底部链接 */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            还没有账号？{" "}
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              立即注册
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
