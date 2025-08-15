import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";
import UserProfile from "./UserProfile";
import { isUserLoggedIn, getUserToken, getUserInfo } from "@/services/auth";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<{
    nickname: string;
    title: string;
    avatar: string;
  } | null>(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = isUserLoggedIn();
      setIsLoggedIn(loggedIn);

      if (loggedIn) {
        const storedUserInfo = getUserInfo();
        if (storedUserInfo) {
          setUserInfo(storedUserInfo);
        } else {
          // 如果没有存储的用户信息，使用默认值
          setUserInfo({
            nickname: "用户",
            title: "学员",
            avatar:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.66-5.33-4-8-4z'/%3E%3C/svg%3E",
          });
        }
      }
    };

    checkLoginStatus();
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // 登录成功后刷新页面状态
    window.location.reload();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
    // 清除本地存储的用户信息
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl">云梦AI</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-white/90 hover:text-white transition-colors"
            >
              首页
            </a>
            <a
              href="/courses"
              className="text-white/90 hover:text-white transition-colors"
            >
              课程
            </a>
            <a
              href="/projects"
              className="text-white/90 hover:text-white transition-colors"
            >
              项目
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <UserProfile
                nickname={userInfo?.nickname || "用户"}
                title={userInfo?.title || "学员"}
                avatar={userInfo?.avatar || ""}
                onLogout={handleLogout}
              />
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  登录
                </Button>
                <Button variant="hero" size="sm">
                  注册
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-4 space-y-4">
              <a
                href="/"
                className="block text-white/90 hover:text-white transition-colors"
              >
                首页
              </a>
              <a
                href="/courses"
                className="block text-white/90 hover:text-white transition-colors"
              >
                课程
              </a>
              <a
                href="/projects"
                className="block text-white/90 hover:text-white transition-colors"
              >
                项目
              </a>
              <div className="flex space-x-4 pt-4">
                {isLoggedIn ? (
                  <div className="flex items-center space-x-2 text-white">
                    <img
                      src={userInfo?.avatar || ""}
                      alt={userInfo?.nickname || "用户"}
                      className="w-6 h-6 rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                      }}
                    />
                    <span className="text-sm">
                      {userInfo?.nickname || "用户"}
                    </span>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsLoginModalOpen(true)}
                    >
                      登录
                    </Button>
                    <Button variant="hero" size="sm">
                      注册
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </nav>
  );
};

export default Navigation;
