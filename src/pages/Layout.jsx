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
// import { LanguageProvider, useLanguage } from "./components/LanguageProvider"; // <-- ERROR 1: ELIMINADO
import LanguageSwitcher from "./components/LanguageSwitcher";
import { User as UserEntity, Creator, Product } from "@/api/entities";
import HomePage from "./pages/Home";
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
import ProfileView from "./components/public/ProfileView";
import ProductPagePreview from "./components/public/ProductPagePreview";

function LayoutContent({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [creator, setCreator] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [copied, setCopied] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [previewMode, setPreviewMode] = useState('profile'); // 'profile' or 'product'
  // const { t } = useLanguage(); // <-- ERROR 2: ELIMINADO

  useEffect(() => {
    checkUserAndCreator();

    const handleProfileUpdate = () => {
      checkUserAndCreator();
    };

    window.addEventListener('creatorProfileUpdated', handleProfileUpdate);

    return () => {
      window.removeEventListener('creatorProfileUpdated', handleProfileUpdate);
    };
  }, []);

  const checkUserAndCreator = async () => {
    try {
      const currentUser = await UserEntity.me();
      setUser(currentUser);
      const creators = await Creator.filter({ created_by: currentUser.email });
      if (creators.length > 0) {
        const currentCreator = creators[0];
        setCreator(currentCreator);

        // Load products for preview
        const activeProducts = await Product.filter({
          creator_id: currentCreator.id,
          is_active: true
        });
        const sortedProducts = activeProducts.sort((a, b) =>
          (a.sort_order || 0) - (b.sort_order || 0)
        );
        setProducts(sortedProducts);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await UserEntity.logout();
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
      window.location.reload();
    }
  };

  const publicUrl = creator ? `${window.location.origin}/PublicStorefront?u=${creator.username}` : '';

  const handleCopyUrl = () => {
    if (!publicUrl) return;
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenPublicUrl = () => {
    if (!publicUrl) return;
    window.open(publicUrl, '_blank');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPreviewMode('product');
  };

  const handleBackToProfile = () => {
    setPreviewMode('profile');
    setSelectedProduct(null);
  };

  // Determinar si mostrar botón de vista previa
  const shouldShowPreviewButton = currentPageName === 'LinkPreview' || currentPageName === 'Design';

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-[#6366f1] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <HomePage />;
  }

  // Main navigation items for bottom nav (mobile) and sidebar (desktop)
  const mainNavigationItems = [
    {
      title: "Home",
      url: createPageUrl("Dashboard"),
      icon: LayoutDashboard,
    },
    {
      title: "Ingresos",
      url: createPageUrl("orders"),
      icon: TrendingUp,
    },
    {
      title: "Mi Tienda",
      url: createPageUrl("LinkPreview"),
      icon: LinkIcon,
    },
    {
      title: "Diseño",
      url: createPageUrl("Design"),
      icon: Palette,
    },
    {
      title: "Clientes",
      url: createPageUrl("Customers"),
      icon: Users,
    },
    {
      title: "Estadísticas",
      url: createPageUrl("Statistics"),
      icon: BarChart3,
    },
    {
      title: "Referidos",
      url: createPageUrl("Referrals"),
      icon: Users,
    },
    {
      title: "Calendario",
      url: createPageUrl("Calendar"),
      icon: Calendar,
    },
    {
      title: "Secuencias de Email",
      url: createPageUrl("EmailSequences"),
      icon: Mail,
    },
    {
      title: "Auto-respuestas IG",
      url: createPageUrl("InstagramAutomation"),
      icon: MessageSquareReply,
    },
    {
      title: "Pregúntale a Link",
      url: createPageUrl("AskLink"),
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <style>{`
        /* Colores del brand ClickMyLink */
        :root {
          --clickmy-primary: #6366f1;
          --clickmy-secondary: #4f46e5;
          --clickmy-accent: #7c3aed;
        }

        /* Custom utility classes */
        .w-4\\.5 { width: 1.125rem; } /* 18px */
        .h-4\\.5 { height: 1.125rem; } /* 18px */

        /* Mobile styles */
        .bottom-nav {
          position: fixed !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 50 !important;
        }

        .main-content-mobile {
          padding-bottom: 80px !important; /* Adjusted for smaller bottom nav */
        }

        /* Glass effect sidebar - UPDATED for new light theme */
        .sidebar-glass {
          background-color: #E4F0FE;
          border-right: 1px solid #e5e7eb; /* gray-200 */
        }

        /* Mobile nav glass - UPDATED for new light theme with glass effect */
        .mobile-nav-glass {
          background: rgba(228, 240, 254, 0.75); /* #E4F0FE with 75% opacity */
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(99, 102, 241, 0.1); /* Subtle blue border */
        }

        /* Glass cards */
        .glass-card {
          background: rgba(255, 255, 255,
