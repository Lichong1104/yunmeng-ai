import { Button } from "@/components/ui/button";
import { Sparkles, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CloudDreamSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title with animated icons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              云梦小世界
            </h2>
            <Zap className="w-8 h-8 text-blue-300 animate-bounce" />
          </div>
          
          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl text-white/90 mb-8 font-medium">
            为不一样的内容创作，立即实现
          </p>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            在这个充满无限可能的数字世界中，每一个创意都能成为现实。
            让AI成为你的创作伙伴，一起探索未知的创作领域。
          </p>
          
          {/* Call to action button */}
          <Button 
            size="lg" 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => navigate('/text-to-video')}
          >
            立即创建
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CloudDreamSection;