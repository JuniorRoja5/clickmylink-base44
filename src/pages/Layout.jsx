import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  LayoutDashboard,
  ShoppingBag,
  User,
  Sparkles,
  Menu,
  X,
  Link as LinkIcon,
  Palette,
  MoreHorizontal,
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
  Copy,
  Check,
  Users,
  Calendar,
  Mail,
  MessageSquareReply,
  ChevronDown,
  Plus,
  Eye,
  ExternalLink,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { User as UserEntity, Creator, Product } from "@/api/entities";
import HomePage from "./Home";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProfileView from "../components/public/ProfileView";
import ProductPagePreview from "../components/public/ProductPagePreview";

function LayoutContent({ children, currentPageName }) {
  const location = useLocation();
  // Simulación para saltar el login y mostrar la interfaz principal
  const [user, setUser] = React.useState({ fake: true }); 
  const [creator, setCreator] = React.useState({ display_name: "Usuario Demo", username: "demouser" });
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false); 
  const [copied, setCopied] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [previewMode, setPreviewMode] = useState('profile');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Se han eliminado las funciones que conectan con el backend (checkUserAndCreator, handleLogout, etc.)

  const handleLogout = () => {
    console.log("Logout simulado.");
  };

  const publicUrl = `/`;

  const handleCopyUrl = () => { /* no-op */ };
  const handleOpenPublicUrl = () => { /* no-op */ };
  const handleProductClick = (product) => { /* no-op */ };
  const handleBackToProfile = () => { /* no-op */ };

  const shouldShowPreviewButton = currentPageName === 'LinkPreview' || currentPageName === 'Design';

  // El bloque 'if (!user)' ya no es necesario porque siempre simulamos un usuario.

  const mainNavigationItems = [
    { title: "Home", url: createPageUrl("Dashboard"), icon: LayoutDashboard },
    { title: "Ingresos", url: createPageUrl("orders"), icon: TrendingUp },
    { title: "Mi Tienda", url: createPageUrl("LinkPreview"), icon: LinkIcon },
    { title: "Diseño", url: createPageUrl("Design"), icon: Palette },
    { title: "Clientes", url: createPageUrl("Customers"), icon: Users },
    { title: "Estadísticas", url: createPageUrl("Statistics"), icon: BarChart3 },
    { title: "Referidos", url: createPageUrl("Referrals"), icon: Users },
    { title: "Calendario", url: createPageUrl("Calendar"), icon: Calendar },
    { title: "Secuencias de Email", url: createPageUrl("EmailSequences"), icon: Mail },
    { title: "Auto-respuestas IG", url: createPageUrl("InstagramAutomation"), icon: MessageSquareReply },
    { title: "Pregúntale a Link", url: createPageUrl("AskLink"), icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <style>{`
        :root { --clickmy-primary: #6366f1; --clickmy-secondary: #4f46e5; --clickmy-accent: #7c3aed; }
        .w-4\\.5 { width: 1.125rem; } .h-4\\.5 { height: 1.125rem; }
        .bottom-nav { position: fixed !important; bottom: 0 !important; left: 0 !important; right: 0 !important; z-index: 50 !important; }
        .main-content-mobile { padding-bottom: 80px !important; }
        .sidebar-glass { background-color: #E4F0FE; border-right: 1px solid #e5e7eb; }
        .mobile-nav-glass { background: rgba(228, 240, 254, 0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-top: 1px solid rgba(99, 102, 241, 0.1); }
        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); }
        .sidebar-nav-item { transition: all 0.15s ease-in-out; }
        .sidebar-nav-item:hover { transform: translateX(2px); }
      `}</style>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        <div className="w-64 sidebar-glass shadow-2xl flex flex-col">
          <div className="px-4 pt-4 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/98cc1bfb6_Screenshot_20250703_182921_Chrome.jpg" alt="ClickMyLink" className="h-10 w-auto object-contain desktop-logo" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between overflow-y-auto">
            <nav className="px-3 py-3">
              <div className="space-y-1.5">
                {mainNavigationItems.map((item) => (
                  <Link key={item.title} to={item.url} className={`sidebar-nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${location.pathname === item.url ? 'bg-indigo-100 text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50'}`}>
                    <item.icon className="w-4.5 h-4.5 flex-shrink-0" />
                    <span className="truncate text-sm">{item.title}</span>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="p-3 border-t border-gray-200 space-y-3 flex-shrink-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-800 hover:bg-black/5 transition-all duration-150 group">
                    <div className="relative">
                      {creator?.avatar_url ? (<img src={creator.avatar_url} alt={creator.display_name} className="w-9 h-9 rounded-full object-cover border-2 border-transparent" />) : (<div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center border-2 border-transparent"><User className="w-4.5 h-4.5 text-gray-600" /></div>)}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#E4F0FE]"></div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-gray-900 truncate">{creator?.display_name || 'Usuario Demo'}</div>
                      <div className="text-xs text-gray-500 truncate">@{creator?.username || 'demouser'}</div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="top" className="w-56 bg-white border-gray-200 shadow-xl rounded-xl p-2" sideOffset={8}>
                  <div className="px-3 py-2 border-b border-gray-100 mb-2">
                    <div className="text-sm font-medium text-gray-900 truncate">{creator?.display_name || 'Usuario Demo'}</div>
                    <div className="text-xs text-gray-500 truncate">{user?.email || 'demo@email.com'}</div>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to={createPageUrl("Profile")} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer"><User className="w-4 h-4" /> Editar Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer"><Plus className="w-4 h-4" /> Agregar otra cuenta</DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2 bg-gray-200" />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg cursor-pointer">
                    <LogOut className="w-4 h-4" /> Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-12 glass-card border-b border-gray-200/50 flex items-center justify-between px-6 shadow-sm">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                {currentPageName}
              </h1>
            </div>
            <div className="flex items-center gap-3"></div>
          </div>
          <main className="flex-1 overflow-auto bg-gradient-to-br from-slate-50/50 via-white/30 to-blue-50/20">{children}</main>
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* ... (el resto del código móvil no necesita cambios) ... */}
      </div>
    </div>
  );
}

export default function Layout({ children, currentPageName }) {
  return (
    <LayoutContent children={children} currentPageName={currentPageName} />
  );
}
