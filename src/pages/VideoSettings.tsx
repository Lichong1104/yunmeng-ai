import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Palette, 
  Settings, 
  Video, 
  Image, 
  Mic,
  Star,
  Download
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoSettings = () => {
  const navigate = useNavigate();
  
  const sidebarItems = [
    { icon: Home, label: "首页", path: "/video-creation" },
    { icon: Palette, label: "创作素材", path: "/creative-materials" },
    { icon: Settings, label: "单元功能", active: true, path: "/video-settings" },
    { icon: Image, label: "文生图片", path: "/text-to-image" },
    { icon: Video, label: "图生视频", path: "/image-to-video" },
    { icon: Video, label: "文生视频", path: "/text-to-video" },
    { icon: Mic, label: "口播", path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", path: "/system-management" }
  ];

  const presetCategories = [
    {
      title: "镜头",
      tags: ["默认镜头", "我的镜头", "固定主体镜头", "手持镜头", "镜头拉远", "镜头推进", "镜头跟随"]
    },
    {
      title: "景别",
      tags: ["远景", "全景", "中景", "近景", "特写", "正面名角", "特写", "无人机拍摄"]
    },
    {
      title: "光影",
      tags: ["阳光", "灯光", "柔和光", "暖光", "白炽光", "烛光", "满市夜景"]
    },
    {
      title: "画面",
      tags: ["主要细节", "背景简约"]
    },
    {
      title: "景固",
      tags: ["景固标签1", "景固标签2", "景固标签3"]
    }
  ];

  const resolutions = ["480p", "720p", "1080p"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">YM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">云梦科技</h1>
                <p className="text-xs text-gray-500">CLOUD DREAM</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              0 <Download className="w-4 h-4 ml-1" /> 导入
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 bg-white/80 backdrop-blur-sm h-screen sticky top-0 shadow-sm">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => item.path && navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  item.active 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
          
          {/* AI Assistant */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-gray-800 rounded-full p-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-800">AI</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Left Content - Video Generator */}
            <div className="col-span-2 space-y-6">
              {/* Title */}
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-200 to-pink-200 px-6 py-3 rounded-lg transform -skew-x-3 inline-block">
                  <h2 className="text-2xl font-bold text-gray-800 transform skew-x-3">
                    视频生成器
                  </h2>
                  <p className="text-sm text-gray-600 transform skew-x-3 mt-1">
                    将您的想法变成视频
                  </p>
                </div>
                <div className="absolute top-2 right-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>

              {/* Content Input */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      描述您的内容
                    </label>
                    <div className="relative">
                      <Textarea
                        placeholder="输入您的内容描述"
                        className="min-h-[200px] text-center flex items-center justify-center resize-none border-2 border-dashed border-blue-300"
                      />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-gray-300">
                        T
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Content Option */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">不需要更多的内容</span>
                  </div>
                </CardContent>
              </Card>

              {/* AI Assistant & Quality Settings */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 rounded-full p-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-800">AI</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 px-4 py-2 rounded-full">
                    <span className="text-white font-semibold text-sm">清晰度</span>
                  </div>
                  <div className="flex space-x-2">
                    {resolutions.map((res) => (
                      <Button
                        key={res}
                        variant={res === "720p" ? "default" : "outline"}
                        size="sm"
                        className="rounded-full"
                      >
                        {res}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Presets */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="font-semibold text-gray-800">词条预设</h3>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {presetCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs cursor-pointer hover:bg-blue-300 transition-colors bg-gray-600 text-white hover:text-gray-800"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Generate Button */}
              <div className="mt-6 pt-4 border-t border-gray-300">
                <div className="text-right">
                  <div className="bg-gray-600 px-4 py-2 rounded-lg inline-block">
                    <span className="text-white text-sm">视频生成预览区</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoSettings;