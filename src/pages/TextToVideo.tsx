import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Upload,
  Home,
  Palette,
  Settings,
  Video,
  Image,
  Mic,
  Star,
  Sparkles,
  Loader2,
  Play,
  Download,
  Share2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// 新增：定义上传图片的类型
interface UploadedImage {
  id: number;
  name: string;
  size: string;
  type: string;
  url: string;
  uploadTime: string;
  category: string;
}

const TextToVideo = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingDialog, setShowLoadingDialog] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [generationTime, setGenerationTime] = useState(0);

  // 新增：图片上传相关状态
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const sidebarItems = [
    { icon: Home, label: "首页", path: "/video-creation" },
    { icon: Palette, label: "创作素材", path: "/creative-materials" },
    { icon: Settings, label: "单元功能", path: "/video-settings" },
    { icon: Image, label: "文生图片", path: "/text-to-image" },
    { icon: Video, label: "图生视频", path: "/image-to-video" },
    { icon: Video, label: "文生视频", active: true, path: "/text-to-video" },
    { icon: Mic, label: "口播", path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", path: "/system-management" },
  ];

  const keywordTags = [
    "围绕主题选择",
    "围定镜头",
    "手持镜头",
    "镜头拉远",
    "镜头推进",
    "镜头跟随",
  ];
  const sceneTags = [
    "远景",
    "全景",
    "中景",
    "明亮",
    "昏暗",
    "正面视角",
    "特写",
    "无人机俯瞰",
  ];
  const lightingTags = [
    "阳光",
    "灯光",
    "柔和光",
    "暖光",
    "自然光",
    "烛光",
    "城市夜景",
  ];
  const frameTags = ["主观视角", "单景简约"];
  const sceneryTags = ["景图选项1", "景图选项2", "景图选项3"];

  // 模拟视频生成过程
  const handleGenerateVideo = () => {
    if (!description.trim()) return;

    setIsLoading(true);
    setShowLoadingDialog(true);
    setLoadingProgress(0);

    // 随机生成25-35秒的加载时间
    const loadingTime = Math.floor(Math.random() * (35000 - 25000) + 25000);
    setGenerationTime(Math.round(loadingTime / 1000));

    const interval = 100; // 每100ms更新一次进度
    const totalSteps = loadingTime / interval;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / totalSteps) * 100, 100);
      setLoadingProgress(progress);

      if (currentStep >= totalSteps) {
        clearInterval(progressInterval);
        setIsLoading(false);
        setShowLoadingDialog(false);
        setShowResult(true);
      }
    }, interval);
  };

  // 视频参数数据
  const videoParams = {
    resolution: "1920x1080",
    duration: "29秒",
    fps: "30fps",
    format: "MP4",
    size: "45.2MB",
    quality: "高清",
    style: "现代简约",
    theme: "科技感",
    color: "蓝白配色",
    effects: "平滑过渡",
    audio: "背景音乐",
    transitions: "淡入淡出",
  };

  // 下载视频功能
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/b6dc33281a0602806d537dc3f020fedd.mp4";
    link.download = "generated-video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 新增：处理图片上传
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    setIsUploading(true);

    // 模拟上传过程
    setTimeout(() => {
      const newImages: UploadedImage[] = files.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type,
        url: URL.createObjectURL(file),
        uploadTime: new Date().toLocaleString(),
        category: getCategoryFromType(file.type),
      }));

      setUploadedImages((prev) => [...prev, ...newImages]);
      setIsUploading(false);
    }, 1000);
  };

  // 新增：格式化文件大小
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // 新增：根据文件类型获取分类
  const getCategoryFromType = (type: string) => {
    if (type.startsWith("image/")) {
      if (type.includes("jpeg") || type.includes("jpg")) return "JPEG图片";
      if (type.includes("png")) return "PNG图片";
      if (type.includes("webp")) return "WebP图片";
      return "图片文件";
    }
    return "其他文件";
  };

  // 新增：删除上传的图片
  const handleRemoveImage = (imageId: number) => {
    setUploadedImages((prev) => prev.filter((img) => img.id !== imageId));
  };

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
            <Badge variant="outline" className="bg-blue-50">
              0 ⬇ 导入
            </Badge>
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
              <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 px-8 py-4 rounded-2xl shadow-lg transform rotate-1">
                <h1 className="text-3xl font-bold text-white mb-2">
                  视频生成器
                </h1>
                <p className="text-blue-100">将您的想法变成视频</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Left Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Upload Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    上传素材
                  </h3>

                  {/* 隐藏的文件输入 */}
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-2 border-dashed border-blue-300 hover:border-blue-400 transition-colors cursor-pointer">
                      <CardContent
                        className="p-8 text-center"
                        onClick={() =>
                          document.getElementById("image-upload").click()
                        }
                      >
                        {isUploading ? (
                          <>
                            <Loader2 className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-spin" />
                            <p className="text-sm text-blue-600 mb-2">
                              正在上传中...
                            </p>
                            <p className="text-xs text-blue-500">请稍候</p>
                          </>
                        ) : (
                          <>
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-sm text-gray-600 mb-2">
                              将音频WebP、JPEG
                            </p>
                            <p className="text-xs text-gray-500">
                              拖拽或点击上传到资源
                            </p>
                            <p className="text-xs text-gray-500">文件</p>
                          </>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-dashed border-blue-300 hover:border-blue-400 transition-colors cursor-pointer">
                      <CardContent
                        className="p-8 text-center"
                        onClick={() =>
                          document.getElementById("image-upload").click()
                        }
                      >
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-sm text-gray-600 mb-2">
                          将音频WebP、JPEG
                        </p>
                        <p className="text-xs text-gray-500">
                          拖拽或点击上传到资源
                        </p>
                        <p className="text-xs text-gray-500">文件</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 上传的图片展示区域 */}
                  {uploadedImages.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-700">
                        已上传的素材 ({uploadedImages.length})
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {uploadedImages.map((image) => (
                          <Card
                            key={image.id}
                            className="group hover:shadow-lg transition-shadow"
                          >
                            <div className="relative">
                              <img
                                src={image.url}
                                alt={image.name}
                                className="w-full h-32 object-cover rounded-t-lg"
                              />
                              <Button
                                size="sm"
                                variant="destructive"
                                className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleRemoveImage(image.id)}
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                            <CardContent className="p-3">
                              <h5 className="font-medium text-sm truncate mb-1">
                                {image.name}
                              </h5>
                              <div className="space-y-1">
                                <p className="text-xs text-gray-500">
                                  大小: {image.size}
                                </p>
                                <p className="text-xs text-gray-500">
                                  类型: {image.category}
                                </p>
                                <p className="text-xs text-gray-400">
                                  上传: {image.uploadTime}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Input Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    图片描述
                  </h3>
                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-4">
                      <Textarea
                        placeholder="请输入图片描述......"
                        className="min-h-32 border-0 resize-none focus:ring-0"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Generate Button */}
                <div className="text-center">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleGenerateVideo}
                    disabled={isLoading || !description.trim()}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        正在生成中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        请帮我生成视频吧
                      </>
                    )}
                  </Button>
                </div>

                {/* 移除原来的Loading Progress部分 */}
              </div>

              {/* Right Settings Panel */}
              <div className="lg:col-span-1">
                <Card className="bg-blue-100/50 border-blue-200 sticky top-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      词库专预设
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Keywords */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">镜头</h4>
                      <div className="flex flex-wrap gap-2">
                        {keywordTags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant={index < 2 ? "default" : "secondary"}
                            className="text-xs cursor-pointer hover:bg-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Scene Types */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">景别</h4>
                      <div className="flex flex-wrap gap-2">
                        {sceneTags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant={index < 3 ? "default" : "secondary"}
                            className="text-xs cursor-pointer hover:bg-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Lighting */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">光影</h4>
                      <div className="flex flex-wrap gap-2">
                        {lightingTags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant={index < 3 ? "default" : "secondary"}
                            className="text-xs cursor-pointer hover:bg-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Frames */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">画面</h4>
                      <div className="flex flex-wrap gap-2">
                        {frameTags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="default"
                            className="text-xs cursor-pointer hover:bg-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Scenery */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">景图</h4>
                      <div className="flex flex-wrap gap-2">
                        {sceneryTags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs cursor-pointer hover:bg-blue-200 bg-gray-600 text-white border-gray-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Preview Area */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">
                        视频生成预览区
                      </h4>
                      <div className="w-full h-24 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">预览区域</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Loading Dialog */}
      <Dialog open={showLoadingDialog} onOpenChange={setShowLoadingDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center text-blue-600">
              🎬 AI正在创作您的视频
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Description Display */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">您的描述：</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  生成进度
                </span>
                <span className="text-sm text-blue-600">
                  {Math.round(loadingProgress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Loading Steps */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                <span className="text-sm text-gray-600">分析描述内容...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                <span className="text-sm text-gray-600">生成视频脚本...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                <span className="text-sm text-gray-600">渲染视频画面...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                <span className="text-sm text-gray-600">优化视频质量...</span>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="text-center text-sm text-gray-500">
              预计剩余时间：约
              {Math.max(
                0,
                Math.ceil(((100 - loadingProgress) / 100) * generationTime)
              )}
              秒
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Result Dialog */}
      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🎉 视频生成完成！
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Video Player */}
            <div className="relative">
              <video
                className="w-full rounded-lg shadow-lg"
                controls
                autoPlay
                muted
                loop
              >
                <source
                  src="/b6dc33281a0602806d537dc3f020fedd.mp4"
                  type="video/mp4"
                />
                您的浏览器不支持视频播放
              </video>

              {/* Video Controls Overlay */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white"
                >
                  <Play className="w-4 h-4 mr-1" />
                  播放
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-1" />
                  下载
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  分享
                </Button>
              </div>
            </div>

            {/* Video Parameters Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  视频参数
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(videoParams)
                    .slice(0, 6)
                    .map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          {key}
                        </div>
                        <div className="text-sm font-medium text-gray-800">
                          {value}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  生成信息
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600">生成时间</span>
                    <span className="text-sm font-medium text-blue-600">
                      {generationTime}秒
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600">生成状态</span>
                    <span className="text-sm font-medium text-green-600">
                      成功
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-600">视频时长</span>
                    <span className="text-sm font-medium text-purple-600">
                      29秒
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-600">描述匹配度</span>
                    <span className="text-sm font-medium text-orange-600">
                      95%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 pt-4">
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2"
                onClick={() => setShowResult(false)}
              >
                关闭
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-2"
                onClick={() => {
                  setShowResult(false);
                  setDescription("");
                }}
              >
                重新生成
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TextToVideo;
