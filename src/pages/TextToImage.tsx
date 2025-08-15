import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Home, Palette, Settings, Video, Image, Mic, Plus, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TextToImage = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [style, setStyle] = useState("写实风格");
  const [quantity, setQuantity] = useState("一张");
  
  const sidebarItems = [
    { icon: Home, label: "首页", path: "/video-creation" },
    { icon: Palette, label: "创作素材", path: "/creative-materials" },
    { icon: Settings, label: "单元功能", path: "/video-settings" },
    { icon: Image, label: "文生图片", active: true, path: "/text-to-image" },
    { icon: Video, label: "图生视频", path: "/image-to-video" },
    { icon: Video, label: "文生视频", path: "/text-to-video" },
    { icon: Mic, label: "口播", path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", path: "/system-management" }
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
              <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 px-8 py-4 rounded-2xl shadow-lg transform -rotate-1">
                <h1 className="text-3xl font-bold text-white mb-2">图片生成器</h1>
                <p className="text-blue-100">将您的想法变成图像</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Content - Image Reference */}
              <div className="lg:col-span-1">
                <Card className="border-2 border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Image className="w-5 h-5 mr-2" />
                      图像参考
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg h-64 flex items-center justify-center bg-blue-100/30 hover:bg-blue-100/50 transition-colors cursor-pointer">
                      <Plus className="w-12 h-12 text-blue-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Content - Text Input and Controls */}
              <div className="lg:col-span-2 space-y-6">
                {/* Text Input */}
                <Card className="border-2 border-blue-200">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm mb-2">输入更创想的图像描述，支持参考图像</p>
                    </div>
                    <Textarea 
                      placeholder="请输入图像描述..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-32 border-0 resize-none focus:ring-0 text-lg"
                    />
                  </CardContent>
                </Card>

                {/* Controls */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">选择比例</label>
                    <Select value={aspectRatio} onValueChange={setAspectRatio}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16:9">16:9</SelectItem>
                        <SelectItem value="4:3">4:3</SelectItem>
                        <SelectItem value="1:1">1:1</SelectItem>
                        <SelectItem value="3:4">3:4</SelectItem>
                        <SelectItem value="9:16">9:16</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">风格选择</label>
                    <Select value={style} onValueChange={setStyle}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="写实风格">写实风格</SelectItem>
                        <SelectItem value="卡通风格">卡通风格</SelectItem>
                        <SelectItem value="抽象风格">抽象风格</SelectItem>
                        <SelectItem value="油画风格">油画风格</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">生成数量</label>
                    <Select value={quantity} onValueChange={setQuantity}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="一张">一张</SelectItem>
                        <SelectItem value="两张">两张</SelectItem>
                        <SelectItem value="四张">四张</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
                      disabled={!prompt.trim()}
                    >
                      生成
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Images Section */}
            <div className="mt-12">
              <div className="flex items-center space-x-4 mb-6">
                <h3 className="text-xl font-semibold text-gray-800">我的</h3>
                <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
              </div>

              <div className="bg-white/60 rounded-xl p-8 border-2 border-dashed border-gray-300 min-h-64">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <Image className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">生成预览图</p>
                  <p className="text-gray-400 text-sm mt-2">输入描述后点击生成按钮开始创作</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TextToImage;