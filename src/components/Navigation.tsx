import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            云梦AI
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white/90 hover:text-white transition-colors">
              首页
            </a>
            <a href="/courses" className="text-white/90 hover:text-white transition-colors">
              课程
            </a>
            <a href="/projects" className="text-white/90 hover:text-white transition-colors">
              项目
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              登录
            </Button>
            <Button variant="hero" size="sm">
              注册
            </Button>
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
              <a href="/" className="block text-white/90 hover:text-white transition-colors">
                首页
              </a>
              <a href="/courses" className="block text-white/90 hover:text-white transition-colors">
                课程
              </a>
              <a href="/projects" className="block text-white/90 hover:text-white transition-colors">
                项目
              </a>
              <div className="flex space-x-4 pt-4">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  登录
                </Button>
                <Button variant="hero" size="sm">
                  注册
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;