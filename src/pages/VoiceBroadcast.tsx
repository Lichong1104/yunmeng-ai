import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Home, Palette, Settings, Video, Image, Mic, Play, Download, Volume2, FileText, ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const VoiceBroadcast = () => {
  const navigate = useNavigate();
  const [script, setScript] = useState("");
  const [voice, setVoice] = useState("female-1");
  const [speed, setSpeed] = useState("normal");
  const [backgroundMusic, setBackgroundMusic] = useState("soft");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  const sidebarItems = [
    { icon: Home, label: "首页", path: "/video-creation" },
    { icon: Palette, label: "创作素材", path: "/creative-materials" },
    { icon: Settings, label: "单元功能", path: "/video-settings" },
    { icon: Image, label: "文生图片", path: "/text-to-image" },
    { icon: Video, label: "图生视频", path: "/image-to-video" },
    { icon: Video, label: "文生视频", path: "/text-to-video" },
    { icon: Mic, label: "口播", active: true, path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", path: "/system-management" }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
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
              <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 px-8 py-4 rounded-2xl shadow-lg transform rotate-1">
                <h1 className="text-3xl font-bold text-white mb-2">智能口播生成器</h1>
                <p className="text-purple-100">将文字和图片转换为专业播客视频</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Content - Script and Image Upload */}
              <div className="lg:col-span-2 space-y-6">
                {/* Script Input */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      播客脚本
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="请输入您的播客脚本内容...&#10;&#10;例如：&#10;大家好，欢迎收听今天的节目。今天我们将讨论人工智能在教育领域的应用..."
                      value={script}
                      onChange={(e) => setScript(e.target.value)}
                      className="min-h-40 resize-none"
                    />
                    <div className="mt-2 text-sm text-gray-500">
                      字数：{script.length} | 预计时长：{Math.ceil(script.length / 200)} 分钟
                    </div>
                  </CardContent>
                </Card>

                {/* Image Upload */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ImageIcon className="w-5 h-5 mr-2" />
                      背景图片
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">上传背景图片</label>
                        <div className="border-2 border-dashed border-blue-300 rounded-lg h-32 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="image-upload"
                          />
                          <label htmlFor="image-upload" className="cursor-pointer text-center">
                            <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">点击上传图片</p>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">预览</label>
                        <div className="border-2 border-gray-200 rounded-lg h-32 flex items-center justify-center bg-gray-50">
                          {uploadedImage ? (
                            <img 
                              src={uploadedImage} 
                              alt="上传的背景图片" 
                              className="max-h-full max-w-full object-contain rounded-lg"
                            />
                          ) : (
                            <p className="text-sm text-gray-400">暂无图片</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Generate Button */}
                <div className="text-center">
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg"
                    disabled={!script.trim()}
                  >
                    <Volume2 className="w-5 h-5 mr-2" />
                    生成播客视频
                  </Button>
                </div>
              </div>

              {/* Right Settings Panel */}
              <div className="lg:col-span-1 space-y-6">
                {/* Voice Settings */}
                <Card className="bg-purple-50/50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Mic className="w-5 h-5 mr-2" />
                      语音设置
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">选择声音</label>
                      <Select value={voice} onValueChange={setVoice}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="female-1">女声 - 温柔</SelectItem>
                          <SelectItem value="female-2">女声 - 活泼</SelectItem>
                          <SelectItem value="male-1">男声 - 稳重</SelectItem>
                          <SelectItem value="male-2">男声 - 年轻</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">语速</label>
                      <Select value={speed} onValueChange={setSpeed}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slow">慢速</SelectItem>
                          <SelectItem value="normal">正常</SelectItem>
                          <SelectItem value="fast">快速</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">背景音乐</label>
                      <Select value={backgroundMusic} onValueChange={setBackgroundMusic}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">无背景音乐</SelectItem>
                          <SelectItem value="soft">轻柔</SelectItem>
                          <SelectItem value="upbeat">活跃</SelectItem>
                          <SelectItem value="corporate">商务</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      预览语音
                    </Button>
                  </CardContent>
                </Card>

                {/* Preview Area */}
                <Card className="bg-gray-50/50 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Video className="w-5 h-5 mr-2" />
                      视频预览
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">生成后将在此预览</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4" disabled>
                      <Download className="w-4 h-4 mr-2" />
                      下载视频
                    </Button>
                  </CardContent>
                </Card>

                {/* Recent Projects */}
                <Card className="bg-blue-50/50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg">最近项目</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="p-2 bg-white rounded border text-sm">
                        <p className="font-medium">AI教育讲座</p>
                        <p className="text-gray-500 text-xs">5分钟前</p>
                      </div>
                      <div className="p-2 bg-white rounded border text-sm">
                        <p className="font-medium">产品介绍</p>
                        <p className="text-gray-500 text-xs">1小时前</p>
                      </div>
                      <div className="p-2 bg-white rounded border text-sm">
                        <p className="font-medium">新闻播报</p>
                        <p className="text-gray-500 text-xs">昨天</p>
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

export default VoiceBroadcast;