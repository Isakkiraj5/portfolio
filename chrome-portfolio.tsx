"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Globe,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Palette,
  Smartphone,
  Monitor,
  ShoppingCart,
  WorkflowIcon as Wordpress,
  ExternalLink,
  Download,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Heart,
  Bookmark,
  MoreVertical,
  Home,
  History,
  Settings,
  Shield,
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Square,
  Copy,
} from "lucide-react"

export default function ChromePortfolio() {
  const [currentTime, setCurrentTime] = useState("")
  const [activeTab, setActiveTab] = useState("about")
  const [isLoading, setIsLoading] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [history, setHistory] = useState<string[]>(["https://isakkiraj.dev"])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [bookmarks, setBookmarks] = useState<Array<{ title: string; url: string }>>([
    { title: "GitHub", url: "https://github.com/Isakkiraj5" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/isakki-raj-6b4526148/" },
  ])

  useEffect(() => {   
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }
     
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleReload = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      const currentUrl = `https://isakkiraj.dev#${activeTab}`
      if (history[historyIndex] !== currentUrl) {
        const newHistory = [...history.slice(0, historyIndex + 1), currentUrl]
        setHistory(newHistory)
        setHistoryIndex(newHistory.length - 1)
      }
    }, 1500)
  }

  const handleBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      const previousUrl = history[historyIndex - 1]
      if (previousUrl.includes("#")) {
        const tab = previousUrl.split("#")[1]
        if (["about", "skills", "projects", "contact"].includes(tab)) {
          setActiveTab(tab)
        }
      }
    }
  }

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      const nextUrl = history[historyIndex + 1]
      if (nextUrl.includes("#")) {
        const tab = nextUrl.split("#")[1]
        if (["about", "skills", "projects", "contact"].includes(tab)) {
          setActiveTab(tab)
        }
      }
    }
  }

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab)
    setShowMobileMenu(false)
    const newUrl = `https://isakkiraj.dev#${newTab}`
    const newHistory = [...history.slice(0, historyIndex + 1), newUrl]
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    if (!isBookmarked) {
      const newBookmark = { title: "Isakkiraj - Portfolio", url: "https://isakkiraj.dev" }
      setBookmarks([...bookmarks, newBookmark])
    } else {
      setBookmarks(bookmarks.filter((b) => b.url !== "https://isakkiraj.dev"))
    }
  }

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowMobileMenu(!showMobileMenu)
  }

  const closeMobileMenu = () => {
    setShowMobileMenu(false)
  }

  const skills = [
    { name: "HTML5", level: 95, icon: Code },
    { name: "CSS3", level: 90, icon: Palette },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "React", level: 80, icon: Code },
    { name: "Next.js", level: 75, icon: Code },
    { name: "WordPress", level: 85, icon: Wordpress },
    { name: "Shopify", level: 80, icon: ShoppingCart },
    { name: "Responsive Design", level: 90, icon: Smartphone },
  ]

  const projects = [
    {
      title: "E-commerce Store",
      description: "Modern Shopify store with custom theme development and advanced functionality.",
      tech: ["Shopify", "JavaScript", "CSS3", "Liquid"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
    },
    {
      title: "Corporate Website",
      description: "Responsive WordPress website with custom theme and CMS integration.",
      tech: ["WordPress", "PHP", "JavaScript", "CSS3"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
    },
    {
      title: "React Dashboard",
      description: "Interactive dashboard built with React and modern UI components.",
      tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing frontend development skills and projects.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Desktop Chrome Browser Header */}
      <div className="hidden md:block bg-white border-b border-gray-300 sticky top-0 z-[999]">
        {/* Tab Bar */}
        <div className="flex items-end bg-gray-100 px-2 pt-2">
          <div className="bg-white rounded-t-lg px-4 py-2 border-t border-l border-r border-gray-300 flex items-center space-x-2 min-w-[200px] relative">
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Globe className="w-4 h-4 text-gray-600" />
            )}
            <span className="text-sm text-gray-800 truncate">Isakkiraj - Portfolio</span>
            <button className="ml-auto hover:bg-gray-100 rounded p-1">
              <X className="w-3 h-3 text-gray-500" />
            </button>
          </div>
          <button className="ml-2 p-2 hover:bg-gray-200 rounded-t-lg">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center px-3 py-2 space-x-3">
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-1">
            <button
              className={`p-2 hover:bg-gray-100 rounded-full ${historyIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={historyIndex === 0}
              onClick={handleBack}
              title="Back"
            >
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              className={`p-2 hover:bg-gray-100 rounded-full ${historyIndex === history.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={historyIndex === history.length - 1}
              onClick={handleForward}
              title="Forward"
            >
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={handleReload}
              disabled={isLoading}
              title="Reload"
            >
              <RotateCcw className={`w-4 h-4 text-gray-600 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Home">
              <Home className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Address Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center space-x-3 hover:shadow-sm transition-shadow">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700 flex-1">
                https://isakkiraj.dev{activeTab !== "about" ? `#${activeTab}` : ""}
              </span>
              <button
                className={`p-1 hover:bg-gray-100 rounded ${isBookmarked ? "text-blue-600" : "text-gray-500"}`}
                onClick={toggleBookmark}
                title={isBookmarked ? "Remove bookmark" : "Bookmark this page"}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            <button
              className={`p-2 hover:bg-gray-100 rounded-full ${isFavorited ? "text-red-500" : "text-gray-600"}`}
              onClick={toggleFavorite}
              title={isFavorited ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
            </button>
            <div className="relative">
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setShowMenu(!showMenu)}
                title="Chrome menu"
              >
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>
              {showMenu && (
                <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-100">
                      Chrome Menu
                    </div>
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                      <History className="w-4 h-4" />
                      <span>History</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                      <Bookmark className="w-4 h-4" />
                      <span>Bookmarks</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <div className="px-4 py-1 text-xs text-gray-500">Bookmarks</div>
                      {bookmarks.map((bookmark, index) => (
                        <button
                          key={index}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-3"
                        >
                          <Globe className="w-4 h-4" />
                          <span className="truncate">{bookmark.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              IK
            </div>
          </div>
        </div>

        {/* Bookmarks Bar */}
        <div className="bg-gray-50 border-t border-gray-200 px-4 py-1">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {bookmarks.slice(0, 5).map((bookmark, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 rounded"
                  title={bookmark.url}
                >
                  <Globe className="w-3 h-3" />
                  <span className="max-w-24 truncate">{bookmark.title}</span>
                </button>
              ))}
            </div>
            {bookmarks.length > 5 && (
              <button className="text-xs text-gray-500 hover:text-gray-700">+{bookmarks.length - 5} more</button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Chrome Browser Header */}
      <div className="md:hidden bg-white border-b border-gray-300">
        {/* Mobile Address Bar */}
        <div className="flex items-center px-3 py-3 space-x-3">
          {/* Back Button */}
          <button
            className={`p-2 hover:bg-gray-100 rounded-full ${historyIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={historyIndex === 0}
            onClick={handleBack}
            title="Back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Address Bar */}
          <div className="flex-1">
            <div className="bg-gray-100 border border-gray-300 rounded-full px-4 py-2 flex items-center space-x-3">
              <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 flex-1 truncate">
                isakkiraj.dev{activeTab !== "about" ? `#${activeTab}` : ""}
              </span>
              <button
                className={`p-1 hover:bg-gray-200 rounded flex-shrink-0 ${isBookmarked ? "text-blue-600" : "text-gray-500"}`}
                onClick={toggleBookmark}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-full" onClick={() => setShowMenu(!showMenu)}>
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <button
                    className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center space-x-3"
                    onClick={handleReload}
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reload</span>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                    <Copy className="w-4 h-4" />
                    <span>Copy link</span>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                    <Square className="w-4 h-4" />
                    <span>Add to Home screen</span>
                  </button>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                      <History className="w-4 h-4" />
                      <span>History</span>
                    </button>
                    <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                      <Bookmark className="w-4 h-4" />
                      <span>Bookmarks</span>
                    </button>
                    <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center space-x-3">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Tab Navigation */}
        <div className="bg-gray-50 border-t border-gray-200 px-3 py-2">
          <button
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 w-full justify-start"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-4 h-4" />
            <span>Sections</span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu} />

            {/* Menu */}
            <div className="fixed inset-x-0 top-0 bg-white border-b border-gray-200 shadow-lg z-50 animate-in slide-in-from-top duration-200">
              <div className="px-4 py-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
                  <button onClick={closeMobileMenu} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-2">
                  {[
                    { id: "about", label: "About Me", icon: User },
                    { id: "skills", label: "Skills & Tech", icon: Code },
                    { id: "projects", label: "My Projects", icon: Briefcase },
                    { id: "contact", label: "Contact", icon: Mail },
                  ].map((item) => {
                    const IconComponent = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleTabChange(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {activeTab === item.id && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            Active
                          </Badge>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Loading Bar */}
      {isLoading && (
        <div className="h-1 bg-gray-200">
          <div className="h-full bg-blue-500 animate-pulse" style={{ width: "60%" }}></div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-transparent border-b-0 h-10 gap-1">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-200 rounded-md text-sm font-medium"
              >
                <User className="w-4 h-4 mr-2" />
                About Me
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-200 rounded-md text-sm font-medium"
              >
                <Code className="w-4 h-4 mr-2" />
                Skills & Tech
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-200 rounded-md text-sm font-medium"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                My Projects
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-200 rounded-md text-sm font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>

            <div className="max-w-7xl mx-auto px-6 py-8">
              <TabsContent value="about" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-2">Isakkiraj</h1>
                      <p className="text-xl text-blue-600 mb-4">Frontend Developer</p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Passionate frontend developer with 2 years of experience creating engaging, responsive web
                        experiences. Specialized in modern JavaScript frameworks, e-commerce platforms, and content
                        management systems.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary">2+ Years Experience</Badge>
                        <Badge variant="secondary">Frontend Specialist</Badge>
                        <Badge variant="secondary">E-commerce Expert</Badge>
                        <Badge variant="outline">Available for Hire</Badge>
                      </div>
                      <Button className="mr-4">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    <a href="https://github.com/Isakkiraj5" target="_blank" rel="noopener noreferrer">
                   <Button variant="outline">
                   <Github className="w-4 h-4 mr-2" />
                     View GitHub
                   </Button>
                   </a>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          Experience Highlights
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">Frontend Development</h3>
                              <Badge variant="secondary" className="text-xs">
                                2+ Years
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">Building responsive web applications</p>
                          </div>
                          <div className="border-l-4 border-green-500 pl-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">E-commerce Solutions</h3>
                              <Badge variant="secondary" className="text-xs">
                                Expert
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">Shopify store development and customization</p>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">CMS Development</h3>
                              <Badge variant="secondary" className="text-xs">
                                Advanced
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">WordPress theme development and customization</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Info</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">Available Worldwide</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Remote
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Briefcase className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">2+ Years Experience</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Senior
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Monitor className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">Frontend Specialist</span>
                          </div>
                          <Badge className="text-xs">Expert</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Tech Stack</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>HTML5</Badge>
                          <Badge>CSS3</Badge>
                          <Badge>JavaScript</Badge>
                          <Badge>React</Badge>
                          <Badge>Next.js</Badge>
                          <Badge>WordPress</Badge>
                          <Badge>Shopify</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="mt-0">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                  <p className="text-gray-600">My expertise spans across modern frontend technologies and platforms.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <IconComponent className="w-5 h-5 text-blue-600" />
                              <span className="font-semibold">{skill.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500">{skill.level}%</span>
                              <Badge
                                variant={skill.level >= 90 ? "default" : skill.level >= 80 ? "secondary" : "outline"}
                                className="text-xs"
                              >
                                {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                              </Badge>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Specializations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                            Responsive Design
                          </div>
                          <Badge className="text-xs">Expert</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Creating mobile-first, responsive layouts that work seamlessly across all devices.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center">
                            <ShoppingCart className="w-5 h-5 mr-2 text-green-600" />
                            E-commerce
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Advanced
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Shopify store development, theme customization, and e-commerce optimization.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Wordpress className="w-5 h-5 mr-2 text-purple-600" />
                            CMS Development
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Advanced
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          WordPress theme development, plugin customization, and content management.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="mt-0">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                  <p className="text-gray-600">A showcase of my recent work and development projects.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gray-100 relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="text-xs">
                            {index === 0 ? "Featured" : "Recent"}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {project.title}
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Github className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button variant="outline" size="lg">
                    <Github className="w-4 h-4 mr-2" />
                    View All Projects on GitHub
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="mt-0">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                    <p className="text-gray-600">Ready to work together? Let's discuss your next project.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                        <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-sm text-gray-600">rajisakki7@gmail.com</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Primary
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-green-600" />
                            <div>
                              <p className="font-medium">Phone</p>
                              <p className="text-sm text-gray-600">+91 8098117300</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Available
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Linkedin className="w-5 h-5 text-blue-700" />
                            <div>
                              <p className="font-medium">LinkedIn</p>
                              <p className="text-sm text-gray-600">linkedin.com/in/isakkiraj</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Professional
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Github className="w-5 h-5 text-gray-800" />
                            <div>
                              <p className="font-medium">GitHub</p>
                              <p className="text-sm text-gray-600">github.com/isakkiraj</p>
                            </div>
                          </div>
                          <Badge className="text-xs">Active</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>I'll get back to you within 24 hours</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                              type="email"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Tell me about your project..."
                            ></textarea>
                          </div>
                          <Button className="w-full">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-3 rounded-lg">
                      <Star className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-800 font-medium">Available for freelance projects</span>
                      <Badge className="text-xs">Hiring</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-4 py-6">
            <TabsContent value="about" className="mt-0">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    IK
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Isakkiraj</h1>
                  <p className="text-lg text-blue-600 mb-4">Frontend Developer</p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    Passionate frontend developer with 2 years of experience creating engaging, responsive web
                    experiences. Specialized in modern JavaScript frameworks, e-commerce platforms, and content
                    management systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    <Badge variant="secondary" className="text-xs">
                      2+ Years Experience
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Frontend Specialist
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      E-commerce Expert
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Available for Hire
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      View GitHub
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Experience Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm">Frontend Development</h3>
                          <Badge variant="secondary" className="text-xs">
                            2+ Years
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">Building responsive web applications</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm">E-commerce Solutions</h3>
                          <Badge variant="secondary" className="text-xs">
                            Expert
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">Shopify store development and customization</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm">CMS Development</h3>
                          <Badge variant="secondary" className="text-xs">
                            Advanced
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">WordPress theme development and customization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm">Available Worldwide</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Remote
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm">2+ Years Experience</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Senior
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm">Frontend Specialist</span>
                      </div>
                      <Badge className="text-xs">Expert</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                  <p className="text-gray-600 text-sm">
                    My expertise spans across modern frontend technologies and platforms.
                  </p>
                </div>

                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <IconComponent className="w-4 h-4 text-blue-600 flex-shrink-0" />
                              <span className="font-semibold text-sm">{skill.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">{skill.level}%</span>
                              <Badge
                                variant={skill.level >= 90 ? "default" : skill.level >= 80 ? "secondary" : "outline"}
                                className="text-xs"
                              >
                                {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                              </Badge>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 text-center">Specializations</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between text-base">
                          <div className="flex items-center">
                            <Smartphone className="w-4 h-4 mr-2 text-blue-600" />
                            Responsive Design
                          </div>
                          <Badge className="text-xs">Expert</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600">
                          Creating mobile-first, responsive layouts that work seamlessly across all devices.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between text-base">
                          <div className="flex items-center">
                            <ShoppingCart className="w-4 h-4 mr-2 text-green-600" />
                            E-commerce
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Advanced
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600">
                          Shopify store development, theme customization, and e-commerce optimization.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between text-base">
                          <div className="flex items-center">
                            <Wordpress className="w-4 h-4 mr-2 text-purple-600" />
                            CMS Development
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Advanced
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600">
                          WordPress theme development, plugin customization, and content management.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                  <p className="text-gray-600 text-sm">A showcase of my recent work and development projects.</p>
                </div>

                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gray-100 relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="text-xs">
                            {index === 0 ? "Featured" : "Recent"}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{project.title}</CardTitle>
                        <CardDescription className="text-xs">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline" size="lg" className="w-full bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    View All Projects on GitHub
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-0">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                  <p className="text-gray-600 text-sm">Ready to work together? Let's discuss your next project.</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                    <CardDescription className="text-sm">
                      Feel free to reach out through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Email</p>
                          <p className="text-xs text-gray-600">isak@example.com</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Primary
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Phone</p>
                          <p className="text-xs text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-4 h-4 text-blue-700 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">LinkedIn</p>
                          <p className="text-xs text-gray-600">linkedin.com/in/isakkiraj</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Professional
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Github className="w-4 h-4 text-gray-800 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">GitHub</p>
                          <p className="text-xs text-gray-600">github.com/isakkiraj</p>
                        </div>
                      </div>
                      <Badge className="text-xs">Active</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Send a Message</CardTitle>
                    <CardDescription className="text-sm">I'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>
                      <Button className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <div className="inline-flex items-center space-x-4 bg-blue-50 px-4 py-3 rounded-lg">
                    <Star className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium text-sm">Available for freelance projects</span>
                    <Badge className="text-xs">Hiring</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Click outside to close menus */}
      {showMenu && <div className="fixed inset-0 z-30" onClick={() => setShowMenu(false)}></div>}
    </div>
  )
}
