import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, User, Settings } from "lucide-react";
import { removeUserToken } from "@/services/auth";

interface UserProfileProps {
  nickname: string;
  title: string;
  avatar: string;
  onLogout: () => void;
}

const UserProfile = ({
  nickname,
  title,
  avatar,
  onLogout,
}: UserProfileProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    removeUserToken();
    onLogout();
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* 用户头像按钮 */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
      >
        <img
          src={avatar}
          alt={nickname}
          className="w-8 h-8 rounded-full border-2 border-white/20"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
          }}
        />
        <span className="hidden lg:block text-sm font-medium">{nickname}</span>
      </button>

      {/* 下拉菜单 */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {/* 用户信息 */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">{nickname}</p>
            <p className="text-xs text-gray-500">{title}</p>
          </div>

          {/* 菜单项 */}
          <div className="py-1">
            <button
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <User size={16} className="mr-2" />
              个人资料
            </button>
            <button
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Settings size={16} className="mr-2" />
              设置
            </button>
          </div>

          {/* 退出登录 */}
          <div className="py-1 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} className="mr-2" />
              退出登录
            </button>
          </div>
        </div>
      )}

      {/* 点击外部关闭下拉菜单 */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
