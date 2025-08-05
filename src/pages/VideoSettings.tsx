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
  Download,
  Loader2,
  Play,
  RefreshCw,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const VideoSettings = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);

  const videoUrl =
    "https://fquantplus.oss-cn-qingdao.aliyuncs.com/text2video/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912025-08-05_173048_429.mp4";

  const handleGenerateVideo = () => {
    if (!text.trim()) return;

    setIsLoading(true);
    setShowVideo(false);
    setLoadingTime(0);

    // 随机生成25-35秒的加载时间
    const randomTime = Math.floor(Math.random() * 10) + 25;

    let timeElapsed = 0;
    const timer = setInterval(() => {
      timeElapsed += 1;
      setLoadingTime(timeElapsed);

      if (timeElapsed >= randomTime) {
        clearInterval(timer);
        setIsLoading(false);
        setShowVideo(true);
      }
    }, 1000);
  };

  const sidebarItems = [
    { icon: Home, label: "首页", active: false },
    { icon: Palette, label: "创作素材" },
    { icon: Settings, label: "单元功能" },
    { icon: Image, label: "文生图片" },
    { icon: Video, label: "图生视频" },
    { icon: Video, label: "文生视频", active: true },
    { icon: Mic, label: "口播" },
    { icon: Settings, label: "系统管理" },
  ];

  const presetCategories = [
    {
      title: "镜头",
      tags: ["默认镜头", "手持镜头", "镜头拉远", "镜头推进"],
    },
    {
      title: "景别",
      tags: ["远景", "中景", "近景", "特写"],
    },
    {
      title: "光影",
      tags: ["阳光", "柔和光", "暖光", "夜景"],
    },
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

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="hidden lg:block w-48 bg-white/80 backdrop-blur-sm h-screen sticky top-0 shadow-sm">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  item.label === "首页" ? navigate("/video-creation") : null
                }
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
        <main className="flex-1 p-4 lg:p-6">
          <div className="flex flex-col h-full space-y-6 lg:space-y-8">
            {/* Upper Section - Input and Presets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Left - Input Area */}
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                {/* Title */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-200 to-pink-200 px-4 lg:px-6 py-2 lg:py-3 rounded-lg transform -skew-x-3 inline-block">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-800 transform skew-x-3">
                      视频生成器
                    </h2>
                    <p className="text-xs lg:text-sm text-gray-600 transform skew-x-3 mt-1">
                      将您的想法变成视频
                    </p>
                  </div>
                  <div className="absolute top-1 lg:top-2 right-1 lg:right-2">
                    <Star className="w-4 h-4 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                  </div>
                </div>

                {/* Content Input */}
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6">
                    <div className="space-y-3 lg:space-y-4">
                      <label className="text-sm font-medium text-gray-700">
                        描述您的内容
                      </label>
                      <div className="relative">
                        <Textarea
                          placeholder="输入您想要转换为视频的文字内容..."
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          className="min-h-[120px] lg:min-h-[150px] resize-none border-2 border-blue-300"
                          disabled={isLoading}
                        />
                      </div>

                      <Button
                        onClick={handleGenerateVideo}
                        disabled={!text.trim() || isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        <div className="flex items-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>开始生成视频</span>
                        </div>
                      </Button>
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
                      <span className="text-white font-semibold text-sm">
                        清晰度
                      </span>
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

              {/* Right - Presets */}
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-3 lg:p-4">
                <div className="flex items-center space-x-2 mb-3 lg:mb-4">
                  <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
                    词条预设
                  </h3>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2 lg:space-y-3 max-h-[300px] lg:max-h-[400px] overflow-y-auto">
                  {presetCategories.map((category, index) => (
                    <div key={index} className="space-y-1 lg:space-y-2">
                      <h4 className="text-xs lg:text-sm font-medium text-gray-700">
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-1 lg:gap-2">
                        {category.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs cursor-pointer hover:bg-blue-300 transition-colors bg-gray-600 text-white hover:text-gray-800 px-2 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Preview Modal */}
            {isLoading && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      正在生成视频
                    </h3>
                    <p className="text-gray-600 mb-4">
                      请稍候，我们正在为您创建精彩的视频内容
                    </p>
                    <div className="bg-blue-50 rounded-lg px-4 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-blue-700 font-medium">
                          处理中... {loadingTime}秒
                        </span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>分析文本内容</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>生成视频场景</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>渲染视频内容</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Result Modal */}
            {showVideo && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          视频生成完成
                        </h3>
                        <p className="text-sm text-gray-500">
                          基于您提供的文本内容
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowVideo(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 space-y-6">
                    {/* Success Message */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center space-x-3 text-green-700">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-base">
                          🎉 视频生成完成！
                        </span>
                      </div>
                    </div>

                    {/* Video Player */}
                    <div className="relative group">
                      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-200">
                        <div className="aspect-video w-full">
                          <video
                            controls
                            className="w-full h-full object-contain"
                            autoPlay
                            muted
                            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23000'/%3E%3C/svg%3E"
                          >
                            <source src={videoUrl} type="video/mp4" />
                            您的浏览器不支持视频播放。
                          </video>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Play className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              生成的视频
                            </h4>
                            <p className="text-sm text-gray-500">
                              基于您提供的文本内容
                            </p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-xs text-gray-400">生成时间</div>
                          <div className="text-sm font-medium text-gray-700">
                            {new Date().toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button
                        onClick={() => {
                          setShowVideo(false);
                          setText("");
                        }}
                        variant="outline"
                        size="lg"
                        className="h-12 text-base font-medium border-2 hover:bg-gray-50"
                      >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        重新生成
                      </Button>
                      <Button
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = videoUrl;
                          link.download = `generated-video-${Date.now()}.mp4`;
                          link.click();
                        }}
                        size="lg"
                        className="h-12 text-base font-medium bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        下载视频
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoSettings;
