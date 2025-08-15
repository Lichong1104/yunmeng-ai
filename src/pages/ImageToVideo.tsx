import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload, Home, Palette, Settings, Video, Image, Mic, Play, Download, Zap, Camera, Film } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ImageToVideo = () => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [videoLength, setVideoLength] = useState([5]);
  const [animationStyle, setAnimationStyle] = useState("zoom-in");
  const [transitionEffect, setTransitionEffect] = useState("fade");
  const [frameRate, setFrameRate] = useState("30fps");
  
  const sidebarItems = [
    { icon: Home, label: "首页", path: "/video-creation" },
    { icon: Palette, label: "创作素材", path: "/creative-materials" },
    { icon: Settings, label: "单元功能", path: "/video-settings" },
    { icon: Image, label: "文生图片", path: "/text-to-image" },
    { icon: Video, label: "图生视频", active: true, path: "/image-to-video" },
    { icon: Video, label: "文生视频", path: "/text-to-video" },
    { icon: Mic, label: "口播", path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", path: "/system-management" }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push(e.target?.result as string);
          if (newImages.length === files.length) {
            setUploadedImages(prev => [...prev, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const animationStyles = [
    { value: "zoom-in", label: "放大进入" },
    { value: "zoom-out", label: "缩小退出" },
    { value: "pan-left", label: "左移" },
    { value: "pan-right", label: "右移" },
    { value: "pan-up", label: "上移" },
    { value: "pan-down", label: "下移" },
    { value: "rotate", label: "旋转" },
    { value: "slide-in", label: "滑入" }
  ];

  const transitionEffects = [
    { value: "fade", label: "淡入淡出" },
    { value: "dissolve", label: "溶解" },
    { value: "wipe", label: "擦除" },
    { value: "slide", label: "滑动" },
    { value: "push", label: "推拉" },
    { value: "cut", label: "直切" }
  ];

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
              0 ⬇ 导入
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
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-8 text-center">
              <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 rounded-2xl shadow-lg transform -rotate-1">
                <h1 className="text-3xl font-bold text-white mb-2">图生视频生成器</h1>
                <p className="text-green-100">将静态图片转换为动态视频</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Content - Image Upload */}
              <div className="lg:col-span-2 space-y-6">
                {/* Image Upload Section */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Camera className="w-5 h-5 mr-2" />
                      图片上传
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50 hover:bg-blue-100 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                        id="multiple-image-upload"
                      />
                      <label htmlFor="multiple-image-upload" className="cursor-pointer">
                        <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">上传图片</h3>
                        <p className="text-gray-600 mb-2">支持多张图片上传，拖拽或点击选择</p>
                        <p className="text-sm text-gray-500">支持 JPG, PNG, WebP 格式</p>
                      </label>
                    </div>

                    {/* Uploaded Images Display */}
                    {uploadedImages.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">已上传图片 ({uploadedImages.length})</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {uploadedImages.map((image, index) => (
                            <div key={index} className="relative group">
                              <img 
                                src={image} 
                                alt={`上传图片 ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                              />
                              <button
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                ×
                              </button>
                              <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 rounded">
                                {index + 1}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Video Settings */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      视频设置
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">动画效果</label>
                        <Select value={animationStyle} onValueChange={setAnimationStyle}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {animationStyles.map((style) => (
                              <SelectItem key={style.value} value={style.value}>
                                {style.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">转场效果</label>
                        <Select value={transitionEffect} onValueChange={setTransitionEffect}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {transitionEffects.map((effect) => (
                              <SelectItem key={effect.value} value={effect.value}>
                                {effect.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        视频长度: {videoLength[0]} 秒
                      </label>
                      <Slider
                        value={videoLength}
                        onValueChange={setVideoLength}
                        max={30}
                        min={3}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>3秒</span>
                        <span>30秒</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">帧率</label>
                      <Select value={frameRate} onValueChange={setFrameRate}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24fps">24 FPS (电影质感)</SelectItem>
                          <SelectItem value="30fps">30 FPS (标准)</SelectItem>
                          <SelectItem value="60fps">60 FPS (高清流畅)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Generate Button */}
                <div className="text-center">
                  <Button 
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg"
                    disabled={uploadedImages.length === 0}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    生成视频
                  </Button>
                </div>
              </div>

              {/* Right Settings Panel */}
              <div className="lg:col-span-1 space-y-6">
                {/* Preview Area */}
                <Card className="bg-gray-50/50 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Film className="w-5 h-5 mr-2" />
                      视频预览
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">上传图片后生成预览</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4" disabled>
                      <Download className="w-4 h-4 mr-2" />
                      下载视频
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Templates */}
                <Card className="bg-green-50/50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg">快速模板</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start text-sm">
                        📸 照片展示
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        🌟 产品展示
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        🎨 艺术画廊
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        📱 社交媒体
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Processing Queue */}
                <Card className="bg-blue-50/50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg">处理队列</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="p-2 bg-white rounded border text-sm">
                        <p className="font-medium">风景照片集</p>
                        <p className="text-green-600 text-xs">✓ 已完成</p>
                      </div>
                      <div className="p-2 bg-white rounded border text-sm">
                        <p className="font-medium">产品图片</p>
                        <p className="text-blue-600 text-xs">⏳ 处理中...</p>
                      </div>
                      <div className="p-2 bg-white rounded border text-sm">
                        <p className="font-medium">活动照片</p>
                        <p className="text-gray-500 text-xs">⏸ 队列中</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ImageToVideo;