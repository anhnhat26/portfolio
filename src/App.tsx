/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { 
  Sparkles, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  Send,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  Copy,
  Folder,
  MessageSquare,
  Cog,
  Upload,
  Camera,
  Facebook,
  Linkedin,
  Laptop,
  Globe,
  Database,
  Target,
  ShieldCheck,
  Trophy,
  Music,
  Headphones
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project, Experience, Skill } from "./types";

// Projects Data conforming to the requirements
const projectsData: Project[] = [
  {
    id: "project-1",
    category: "BÀI TẬP THỰC HÀNH 01",
    title: "Thiết lập Hệ thống Kỹ thuật số",
    objective: "Làm chủ cấu trúc phần cứng và thiết bị ngoại vi.",
    practice: "Lắp ráp, cài đặt driver và xử lý lỗi kết nối cơ bản.",
    buttonText: "Báo cáo Google Docs ↗",
    documentUrl: "https://docs.google.com/document/d/1xOUgjHpEtHT82D9K5lKsp6-t64019aRkiCajiXmr1Xk/edit?tab=t.0",
    description: "Làm chủ cấu trúc phần cứng và thiết bị ngoại vi thông qua lắp ráp, cài đặt driver và xử lý lỗi kết nối cơ bản.",
    detailedOutcome: "Nghiên cứu cấu tạo chi tiết các thành phần phần cứng vật lý, lắp đặt, tối ưu hóa hệ điều hành, cấu hình mạng truyền tải và kết nối ngoại vi đảm bảo hoạt động nghiệp vụ Marketing trơn tru.",
    tags: ["Mạng máy tính", "Phần cứng", "Hạ tầng số"],
    tools: ["Windows OS", "Hardware Info", "Command Prompt"]
  },
  {
    id: "project-2",
    category: "BÀI TẬP THỰC HÀNH 02",
    title: "Khai thác & Phân tích Dữ liệu",
    objective: "Thu thập và xác thực dữ liệu phục vụ nghiên cứu Marketing.",
    practice: "Dùng toán tử tìm kiếm nâng cao, lọc thông tin và báo cáo.",
    buttonText: "Báo cáo Google Docs ↗",
    documentUrl: "https://docs.google.com/document/d/1xOUgjHpEtHT82D9K5lKsp6-t64019aRkiCajiXmr1Xk/edit?tab=t.di4qnwxu65t1",
    description: "Thu thập và xác thực dữ liệu phục vụ nghiên cứu Marketing thông qua toán tử tìm kiếm nâng cao, lọc thông tin và báo cáo.",
    detailedOutcome: "Mastering toán tử tìm kiếm Google (Advanced Search Operators), định vị nguồn tệp thông tin chất lượng cao, chọn lọc dữ liệu thị trường khách hàng và kiểm chứng nguồn tin liêm chính.",
    tags: ["Data Mining", "Data Validation", "SEO Keywords"],
    tools: ["Google Search Operator", "Excel Processing", "FactChecking"]
  },
  {
    id: "project-3",
    category: "BÀI TẬP THỰC HÀNH 03",
    title: "Ứng dụng Trí tuệ Nhân tạo",
    objective: "Đưa AI vào tối ưu hóa tốc độ quy trình làm việc.",
    practice: "Sử dụng ChatGPT, Gemini để brainstorm và biên tập nội dung.",
    buttonText: "Báo cáo Google Docs ↗",
    documentUrl: "https://docs.google.com/document/d/1xOUgjHpEtHT82D9K5lKsp6-t64019aRkiCajiXmr1Xk/edit?tab=t.9xp3oumxtyf",
    description: "Đưa AI vào tối ưu hóa tốc độ quy trình làm việc bằng việc sử dụng ChatGPT, Gemini để brainstorm và biên tập nội dung.",
    detailedOutcome: "Biết tạo lập hệ sinh thái prompt thông minh, trợ lý ảo cá nhân hóa cao phục vụ soạn thảo văn bản tự động, tổng hợp ý tưởng chiến dịch quảng cáo và phân tích đối thủ cạnh tranh.",
    tags: ["Prompt Eng", "Artificial Intelligence", "Content Gen"],
    tools: ["ChatGPT Plus", "Gemini Pro", "Claude Sonnet"]
  },
  {
    id: "project-4",
    category: "BÀI TẬP THỰC HÀNH 04",
    title: "Giao tiếp & Làm việc nhóm Số",
    objective: "Duy trì kết nối và hiệu suất công việc trên môi trường online.",
    practice: "Setup email, quản lý tiến độ dự án qua Google Workspace & Trello.",
    buttonText: "Báo cáo Google Docs ↗",
    documentUrl: "https://docs.google.com/document/d/1xOUgjHpEtHT82D9K5lKsp6-t64019aRkiCajiXmr1Xk/edit?tab=t.cq4x8evrz1sk",
    description: "Duy trì kết nối và hiệu suất công việc trên môi trường online thông qua setup email, quản lý tiến độ dự án qua Google Workspace & Trello.",
    detailedOutcome: "Điều phối và phân chia đầu việc đội nhóm theo mô hình Kanban thông qua Trello, đồng bộ lưu trữ và chia sẻ phân quyền đám mây cùng Google Drive, Calendar, Docs.",
    tags: ["Kanban Board", "Group Collaboration", "Cloud Office"],
    tools: ["Google Drive", "Trello Pro", "Google Calendar"]
  },
  {
    id: "project-5",
    category: "BÀI TẬP THỰC HÀNH 05",
    title: "Sáng tạo Truyền thông Đa phương tiện",
    objective: "Sản xuất nội dung đáp ứng thị hiếu mạng xã hội.",
    practice: "Lên kịch bản, thiết kế Canva, cắt ghép video bằng CapCut.",
    buttonText: "Báo cáo Google Docs ↗",
    documentUrl: "https://docs.google.com/document/d/1xOUgjHpEtHT82D9K5lKsp6-t64019aRkiCajiXmr1Xk/edit?tab=t.id9jc09ne01n",
    description: "Sản xuất nội dung đáp ứng thị hiếu mạng xã hội qua việc thiết lập kịch bản, thiết kế Canva, cắt ghép video bằng CapCut.",
    detailedOutcome: "Biên tập kịch bản câu chuyện trực quan (Storyboarding), định dạng bộ cục đồ họa thương hiệu đa nền tảng bằng Canva và dựng cắt ráp phim ngắn truyền thông với hiệu ứng bằng CapCut.",
    tags: ["Creative Design", "Video Editing", "Multimedia Presentation"],
    tools: ["Canva Core", "CapCut Editor", "Photoshop CC"]
  },
  {
    id: "project-6",
    category: "BÀI TẬP THỰC HÀNH 06",
    title: "An toàn & Liêm chính Học thuật",
    objective: "Tuân thủ bảo mật dữ liệu và luật bản quyền số.",
    practice: "Bảo mật tài khoản đa lớp, trích dẫn nguồn tài liệu chuẩn mực.",
    buttonText: "Báo cáo Google Docs ↗",
    documentUrl: "https://docs.google.com/document/d/1xOUgjHpEtHT82D9K5lKsp6-t64019aRkiCajiXmr1Xk/edit?tab=t.3ks8s05fphqc",
    description: "Tuân thủ bảo mật dữ liệu và luật bản quyền số bằng việc thiết lập bảo mật tài khoản đa lớp, trích dẫn nguồn tài liệu chuẩn mực.",
    detailedOutcome: "Thiết lập tường lửa thông tin cá nhân qua chính sách bảo mật, nhận định hành vi lừa đảo Phishing giả mạo mạng và vận dụng linh hoạt giấy phép bản quyền Creative Commons.",
    tags: ["Cyber Safety", "Copyright CC", "Security Awareness"],
    tools: ["Multi-Factor Auth", "Creative Commons", "Phishing Filters"]
  }
];

// Skills Data
const skillsData: Skill[] = [
  {
    id: "skill-1",
    title: "AI Content Creation",
    description: "Sản xuất nội dung đa kênh (Video, Image, Blog) chất lượng và tốc độ cao với AI.",
    details: [
      "Lập dàn ý & viết bài blog, bài post Facebook chuẩn SEO chuẩn văn phong thương hiệu bằng LLMs.",
      "Thiết kế hình ảnh và poster truyền thông nhất quán phong cách thương hiệu.",
      "Sản xuất kịch bản và dựng video ngắn TikTok/Reels tự động hóa cao."
    ]
  },
  {
    id: "skill-2",
    title: "Landing Page",
    description: "Thiết kế trang đích tối ưu UI/UX và tỷ lệ chuyển đổi (CRO).",
    details: [
      "Bố cục thông tin (Information Architecture) chuẩn tâm lý học khách hàng.",
      "Xây dựng wireframe nhanh, trực quan hóa lợi ích của sản phẩm vượt trội.",
      "Tối ưu hóa các điểm nút bấm kêu gọi hành động (Call to Action)."
    ]
  },
  {
    id: "skill-3",
    title: "Data-Driven Ad",
    description: "Thực thi quảng cáo Facebook, TikTok dựa trên phân tích dữ liệu tập khách hàng.",
    details: [
      "A/B testing tự động hóa nội dung sáng tạo ads bằng trí tuệ nhân tạo.",
      "Phân tích hành vi tệp khách hàng cũ để lookalike chuẩn xác đối tượng mới.",
      "Tối đa hóa doanh số bán lẻ dựa trên số liệu báo cáo đa kênh."
    ]
  },
  {
    id: "skill-4",
    title: "Prompt Engineering",
    description: "Tự động hóa quy trình Marketing bằng bộ lệnh AI chuyên sâu.",
    details: [
      "Thiết kế cấu trúc prompt (Few-shot, Chain-of-thought) đạt hiệu suất cao nhất.",
      "Tích hợp API ngôn ngữ lớn vào quy trình soạn thảo văn phòng tự động.",
      "Đào tạo trợ lý AI chuyên biệt để tối ưu năng suất cho đội nhóm marketing."
    ]
  }
];

// Experience Data
const experiencesData: Experience[] = [
  {
    id: 1,
    role: "AI Marketing Freelancer",
    company: "EduCoaching",
    period: "01/2025 - HIỆN TẠI",
    description: "Hỗ trợ xây dựng kịch bản phễu bán hàng và thiết kế Landing Page tuyển sinh cho các khóa học online.",
    result: "Hoàn thành 03 hệ thống phễu phái sinh tự động, giúp đối tác thu về hơn 500 lead chất lượng đạt tỷ lệ chuyển đổi đăng ký lên tới 24%."
  },
  {
    id: 2,
    role: "Trưởng nhóm Marketing (Dự án ASM)",
    company: "Dự án nghiên cứu giả lập \"Eco-Green\"",
    period: "06/2024 - 12/2024",
    description: "Lập kế hoạch truyền thông tích hợp (IMC) và trực tiếp triển khai kênh TikTok cho thương hiệu sản phẩm xanh bảo vệ môi trường.",
    result: "Đạt điểm đánh giá học tập xuất sắc 9.5; xây dựng thành công kênh TikTok đạt mốc 5.000 followers thực tế chỉ trong vòng 2 tuần triển khai thử nghiệm."
  }
];

// Education Data
const educationData = {
  school: "Trường Đào tạo Kỹ thuật số",
  major: "Chuyên ngành Digital Marketing",
  period: "2022 - 2025",
  achievement: "Sinh viên tiêu biểu sắc sảo, GPA chuyên ngành đạt kỷ lục 9.0/10",
  details: [
    "Thành thạo các công cụ AI phân tích dữ liệu & SEO nâng cao.",
    "Báo cáo tốt nghiệp đạt điểm số xuất sắc (9.5) trước ban giám khảo chuyên môn.",
    "Trực tiếp triển khai kịch bản tăng trưởng kênh thu hút hàng nghìn người theo dõi."
  ]
};

// Animated Counter component with auto padding
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1200; // 1.2 seconds animation
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [target]);

  const displayValue = count < 10 && target < 10 ? `0${count}` : `${count}`;

  return <span>{prefix}{displayValue}{suffix}</span>;
}

// Scroll reveal transitions
const scrollRevealUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-25px" },
  transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
};

const scrollRevealLeft = {
  initial: { opacity: 0, x: -18 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-25px" },
  transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
};

const scrollRevealRight = {
  initial: { opacity: 0, x: 18 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-25px" },
  transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
};

const scrollRevealScale = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: false, margin: "-25px" },
  transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
};

export default function App() {
  // Modal states for projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Interactive Skills explanation visibility state
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  
  // Tab control for Kinh nghiệm vs Học vấn
  const [activeTab, setActiveTab] = useState<"exp" | "edu">("exp");

  // Contact modal state
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Form states
  const [recruiterName, setRecruiterName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentInquiries, setSentInquiries] = useState<any[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Custom toast notification parameters
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Static avatar URL configuration
  const avatarUrl = "https://lupypet.com/wp-content/uploads/2026/06/56b9895e-334f-4bb0-9655-42b7f0622fd8.jpg";

  // Load existing inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("khang_pq_inquiries");
    if (saved) {
      try {
        setSentInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Helper trigger function to copy contact info to clipboard
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    triggerToast(`Đã sao chép ${label} thành công!`);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Submit recruiter form
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!recruiterName || !email) {
      triggerToast("Vui lòng điền đủ Họ tên và Email liên hệ!");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const newInquiry = {
        id: Date.now().toString(),
        name: recruiterName,
        company: companyName || "Đang cập nhật",
        email: email,
        phone: phone || "Không cung cấp",
        message: message || "Gửi lời mời phỏng vấn",
        date: new Date().toLocaleDateString("vi-VN") + " - " + new Date().toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })
      };
      
      const updated = [newInquiry, ...sentInquiries];
      setSentInquiries(updated);
      localStorage.setItem("khang_pq_inquiries", JSON.stringify(updated));
      
      setIsSubmitting(false);
      setIsContactOpen(false);
      
      // Reset form fields
      setRecruiterName("");
      setCompanyName("");
      setEmail("");
      setPhone("");
      setMessage("");
      
      triggerToast("Gửi lời mời phỏng vấn thành công! Phạm Quốc Khang sẽ liên hệ lại sớm nhất.");
    }, 1200);
  };

  return (
    <div className="bg-[#F4F4F2] text-[#111111] font-sans min-h-screen selection:bg-[#E54522] selection:text-white transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 bg-[#111111] text-white border-2 border-[#E54522] px-6 py-4 shadow-[4px_4px_0px_#E54522] flex items-center gap-3"
          >
            <CheckCircle2 className="text-[#E54522] w-5 h-5 shrink-0 animate-bounce" />
            <span className="font-display font-semibold text-sm">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern navigation header */}
      <header className="sticky top-0 z-40 bg-[#F4F4F2]/95 backdrop-blur-md border-b border-[#CCCCCC] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Cog className="text-[#E54522] w-6 h-6 animate-spin-slow shrink-0" />
              <h1 className="font-display font-extrabold text-2xl tracking-tight uppercase">Quốc Khang.</h1>
            </div>
            <p className="text-xs font-mono text-neutral-500 hover:text-[#E54522] transition-colors mt-0.5 cursor-pointer" onClick={() => handleCopy("u25080084@hsb.edu.vn", "Email")}>
              u25080084@hsb.edu.vn
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm uppercase font-display font-bold tracking-wider">
            <a href="#about" className="hover:text-[#E54522] transition-colors">Giới thiệu</a>
            <a href="#vision" className="hover:text-[#E54522] transition-colors">Tầm nhìn</a>
            <a href="#projects" className="hover:text-[#E54522] transition-colors">Dự án</a>
            <a href="#skills" className="hover:text-[#E54522] transition-colors">Kỹ năng</a>
          </nav>

          <div className="flex items-center gap-2">
            {sentInquiries.length > 0 && (
              <button 
                onClick={() => setShowInbox(!showInbox)}
                className="relative bg-white border border-[#111111] py-2 px-3 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-neutral-100 uppercase"
                title="Hòm thư lời mời đã gửi"
              >
                <MessageSquare className="w-4 h-4 text-[#E54522]" />
                <span>Thư gửi ({sentInquiries.length})</span>
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E54522] rounded-full animate-ping" />
              </button>
            )}
            <a 
              href="https://www.facebook.com/khang.beat.9"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#111111] bg-transparent text-[#111111] font-display font-bold py-2 px-5 hover:bg-[#111111] hover:text-white transition-all uppercase tracking-wider text-xs shadow-[3px_3px_0px_#111111] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none inline-block text-center cursor-pointer"
            >
              Liên hệ phỏng vấn
            </a>
          </div>
        </div>
      </header>

      {/* Recruiter Inbox Section overlay-like list if visible */}
      <AnimatePresence>
        {showInbox && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-zinc-900 text-white max-w-7xl mx-auto mt-4 mx-6 p-6 border-2 border-[#E54522] shadow-[6px_6px_0px_#111111]"
          >
            <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2 text-[#E54522] font-display font-bold text-lg">
                <MessageSquare className="w-5 h-5 animate-pulse" />
                <span>DASHBOARD PHẠM QUỐC KHANG - THEO DÕI LỜI MỜI PHỎNG VẤN TRỰC TUYẾN</span>
              </div>
              <button onClick={() => setShowInbox(false)} className="text-zinc-400 hover:text-white text-sm uppercase font-mono">
                [ĐÓNG ĐĂNG KÍ]
              </button>
            </div>
            
            <p className="text-xs text-zinc-400 mb-4 font-mono flex items-center gap-1.5">
              <Cog className="w-3.5 h-3.5 text-[#E54522] animate-spin-slow shrink-0" />
              <span>Trình duyệt này đang lưu trữ các đề xuất tuyển dụng thực tế cục bộ trong LocalStorage. Bản tin này mô phỏng hòm thư của Phạm Quốc Khang nhận tin kịp thời.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-72 overflow-y-auto pr-2">
              {sentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="bg-zinc-800 p-4 border border-zinc-700 hover:border-[#E54522] transition-colors relative">
                  <div className="text-[#E54522] text-xs font-mono mb-1">{inquiry.date}</div>
                  <div className="font-bold text-sm text-white mb-2">{inquiry.name} <span className="text-zinc-400">@ {inquiry.company}</span></div>
                  <div className="text-xs font-mono text-zinc-300 space-y-1 mb-2 bg-[#1c1c1a]/50 p-2 border border-zinc-700/50">
                    <div><b>Email:</b> {inquiry.email}</div>
                    <div><b>Điện thoại:</b> {inquiry.phone}</div>
                  </div>
                  <p className="text-xs text-zinc-300 italic">"{inquiry.message}"</p>
                  <button 
                    onClick={() => {
                      const filtered = sentInquiries.filter(x => x.id !== inquiry.id);
                      setSentInquiries(filtered);
                      localStorage.setItem("khang_pq_inquiries", JSON.stringify(filtered));
                      if(filtered.length === 0) setShowInbox(false);
                      triggerToast("Xoá lời mời thành công!");
                    }}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-rose-400"
                    title="Xóa bản ghi này"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column info details */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] leading-none uppercase mb-1">
            PHẠM QUỐC KHANG
          </h1>
          <div className="inline-flex items-center gap-1.5 bg-[#E54522]/10 text-[#E54522] px-3 py-1 text-[11px] font-mono tracking-widest uppercase font-extrabold border border-[#E54522]/20 rounded-md mb-4 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E54522] animate-ping" />
            <span>Biệt danh: Spidermanz 🕷️</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#E54522] tracking-tight uppercase mb-6 flex items-center gap-2">
            Marketing & Communication <span className="text-[#E54522] select-none inline-block align-middle"><Cog className="w-6 h-6 sm:w-8 sm:h-8 animate-spin-slow text-[#E54522]" /></span>
          </h2>
          <p className="font-sans text-[#444444] text-base md:text-lg mb-6 leading-relaxed max-w-xl font-medium">
            "Sáng tạo tư duy. Làm chủ công nghệ. Tối ưu trải nghiệm."
          </p>

          {/* Elegant Hobbies Pill Row */}
          <div className="flex flex-col gap-3.5 mb-8 w-full max-w-xl">
            <h4 className="font-mono text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest flex items-center gap-1.5 mb-1">
              <span>// CHỈ SỐ CÂN BẰNG & SÁNG TẠO</span>
            </h4>
            <div className="flex flex-wrap gap-3 text-xs font-mono font-bold">
              {/* Football Badge */}
              <div className="bg-white/90 backdrop-blur-xs border-2 border-neutral-900 text-neutral-900 px-3.5 py-1.5 uppercase flex items-center gap-2.5 rounded-xl shadow-[3px_3px_0px_#111111] hover:shadow-[1px_1px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 group cursor-default">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-200">
                  <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="font-sans font-extrabold tracking-wide text-[12px] text-neutral-800">Bóng đá</span>
                  <span className="font-mono text-[8.5px] text-neutral-400 font-medium normal-case">Football</span>
                </div>
              </div>

              {/* Guitar Badge */}
              <div className="bg-white/90 backdrop-blur-xs border-2 border-neutral-900 text-neutral-900 px-3.5 py-1.5 uppercase flex items-center gap-2.5 rounded-xl shadow-[3px_3px_0px_#111111] hover:shadow-[1px_1px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 group cursor-default">
                <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-200">
                  <Music className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="font-sans font-extrabold tracking-wide text-[12px] text-neutral-800">Guitar</span>
                  <span className="font-mono text-[8.5px] text-neutral-400 font-medium normal-case">Acoustic</span>
                </div>
              </div>

              {/* Music Badge */}
              <div className="bg-white/90 backdrop-blur-xs border-2 border-neutral-900 text-neutral-900 px-3.5 py-1.5 uppercase flex items-center gap-2.5 rounded-xl shadow-[3px_3px_0px_#111111] hover:shadow-[1px_1px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 group cursor-default">
                <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-200">
                  <Headphones className="w-3.5 h-3.5 text-rose-600" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="font-sans font-extrabold tracking-wide text-[12px] text-neutral-800">Âm nhạc</span>
                  <span className="font-mono text-[8.5px] text-neutral-400 font-medium normal-case">Audiophile</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-neutral-500 font-mono mt-1 leading-relaxed">
              (Giúp tối ưu hóa bán cầu não, tái tạo tư duy bứt phá và giữ vững nhịp độ sáng tạo mỗi ngày)
            </p>
          </div>

          {/* Stats Box section as in Image 1 */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full mb-12 max-w-xl">
            <div className="border-l-4 border-[#E54522] pl-3">
              <div className="font-display font-extrabold text-[#E54522] text-2xl sm:text-4xl leading-tight">
                <AnimatedCounter target={6} />+
              </div>
              <div className="font-display font-bold text-[8px] sm:text-[10px] text-neutral-600 uppercase tracking-wider mt-1.5 select-none leading-normal">
                Dự án <br /> kỹ năng số
              </div>
            </div>

            <div className="border-l-4 border-[#111111] pl-3">
              <div className="font-display font-extrabold text-[#111111] text-2xl sm:text-4xl leading-tight">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <div className="font-display font-bold text-[8px] sm:text-[10px] text-neutral-600 uppercase tracking-wider mt-1.5 select-none leading-normal">
                Hoàn thiện <br /> Portfolio
              </div>
            </div>

            <div className="border-l-4 border-[#E54522] pl-3">
              <div className="font-display font-extrabold text-[#E54522] text-2xl sm:text-4xl leading-tight">
                <AnimatedCounter target={3} />
              </div>
              <div className="font-display font-bold text-[8px] sm:text-[10px] text-neutral-600 uppercase tracking-wider mt-1.5 select-none leading-normal">
                Nhóm kỹ <br /> năng cốt lõi
              </div>
            </div>
          </div>

          {/* Action buttons matching screenshot */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.facebook.com/khang.beat.9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] text-white font-display font-bold py-4 px-8 border border-[#111111] hover:bg-[#E54522] hover:border-[#E54522] hover:scale-102 transition-all duration-300 text-sm tracking-wider uppercase text-center cursor-pointer shadow-[4px_4px_0px_#CCCCCC] inline-block"
            >
              Liên hệ phỏng vấn
            </a>
            <a 
              href="#projects" 
              className="bg-transparent text-[#111111] font-display font-bold py-4 px-8 border border-[#111111] hover:bg-neutral-100 hover:scale-102 transition-all duration-300 text-sm tracking-wider uppercase text-center cursor-pointer"
            >
              Xem dự án
            </a>
          </div>
        </motion.div>

        {/* Right Column Layout containing Circular avatar frame & backdrop gear */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative select-none"
        >
          {/* Main gigantic gear centered behind the avatar container (bao chìm cái avatar) */}
          <div className="absolute w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] md:w-[490px] md:h-[490px] lg:w-[500px] lg:h-[500px] flex items-center justify-center pointer-events-none select-none z-0">
            <Cog className="w-full h-full text-[#E54522]/20 animate-spin-very-slow filter drop-shadow-[0_0_20px_rgba(229,69,34,0.15)]" />
          </div>

          {/* Secondary smaller gear interlocking at the bottom-left offset to create realistic clockwork depth */}
          <div className="absolute -bottom-8 -left-8 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] hidden sm:flex items-center justify-center pointer-events-none select-none z-0">
            <Cog className="w-full h-full text-[#E54522]/10 animate-[spin_20s_linear_infinite_reverse]" />
          </div>

          <div className="relative z-10 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[430px] lg:h-[430px] rounded-full p-2 flex items-center justify-center bg-transparent group">
            {/* Glowing neon shadow border ring */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-[#E54522]/30 group-hover:border-[#E54522]/60 transition-all duration-700 animate-pulse" 
              style={{ boxShadow: "0 0 45px 12px rgba(229, 69, 34, 0.3)" }} 
            />
            
            {/* Inner rotating dashed wireframe */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#E54522]/40 animate-spin-very-slow" />

            <div 
              className="w-full h-full rounded-full overflow-hidden bg-gradient-to-tr from-neutral-900 via-neutral-950 to-neutral-850 border-2 border-neutral-800 relative flex flex-col items-center justify-center group/avatar"
            >
              <div className="absolute inset-0 bg-checkered opacity-5" />
              
              {/* High quality portrait matching the young man sideways cap profile */}
              <img 
                src={avatarUrl} 
                alt="Chân dung Phạm Quốc Khang" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-110"
              />
              
              {/* Nice watermark overlay */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#111111]/90 text-[#E54522] py-1.5 px-5 text-[10px] font-mono rounded-full uppercase tracking-widest text-center border border-[#E54522]/65 backdrop-blur-sm shadow-xl flex items-center gap-1.5 z-20">
                <Cog className="w-3.5 h-3.5 text-[#E54522] animate-spin-slow shrink-0" />
                <span>PQK DESIGNATE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TICKER MARQUEE TAPE TILTED */}
      <div className="relative w-full overflow-hidden bg-[#111111] py-4 rotate-[-1.5deg] scale-102 shadow-[0_10px_20px_rgba(0,0,0,0.15)] z-20 my-10 border-t border-b border-[#E54522]">
        <div className="flex whitespace-nowrap text-white text-xs md:text-sm font-semibold tracking-widest uppercase">
          <div className="animate-marquee inline-flex items-center gap-10">
            <span>AUTOMATION</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>AI CONTENT CREATION</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>LANDING PAGE</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>DATA-DRIVEN AD</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>PROMPT ENGINEERING</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>SEO AUDIT</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>DIGITAL CHANNELS</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>MARKETING CAMPAIGNS</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
          </div>
          <div className="animate-marquee inline-flex items-center gap-10" aria-hidden="true">
            <span>AUTOMATION</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>AI CONTENT CREATION</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>LANDING PAGE</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>DATA-DRIVEN AD</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>PROMPT ENGINEERING</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>SEO AUDIT</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>DIGITAL CHANNELS</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
            <span>MARKETING CAMPAIGNS</span> <span className="text-[#E54522]"><Cog className="w-4 h-4 text-[#E54522] animate-spin-slow inline" /></span>
          </div>
        </div>
      </div>

      {/* SECTION 2: OBJECTIVE & VISION SECTION */}
      <section id="vision" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-200 scroll-mt-20 relative overflow-hidden">
        {/* Subtle decorative glowing background blur */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#E54522]/5 rounded-full blur-3xl pointer-events-none select-none" />

        <div className="flex flex-col gap-16 relative z-10">
          
          {/* Header Row: Dual-axis design with micro indicator sequence and modern accent line */}
          <motion.div 
            {...scrollRevealUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-neutral-900 pb-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#E54522]/10 text-[#E54522] px-3 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase font-extrabold border border-[#E54522]/20 shadow-xs">
                <span>[ SEC 02 // GOAL & VISION ]</span>
              </div>
              <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-tight leading-none">
                MỤC TIÊU & <span className="bg-gradient-to-r from-[#E54522] to-[#ff7e60] bg-clip-text text-transparent">TẦM NHÌN</span>
              </h3>
            </div>
            <p className="font-sans text-xs md:text-sm text-neutral-500 max-w-sm leading-relaxed md:text-right font-light">
              Định hướng bứt phá xuất sắc, dấn thân chuyển giao công nghệ và cam kết thực thi Marketing bản lĩnh của Phạm Quốc Khang.
            </p>
          </motion.div>

          {/* Master Statement block (Highly Polished Editorial style with technical wireframe hints) */}
          <motion.div 
            {...scrollRevealUp}
            className="relative bg-white/40 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-8 sm:p-12 md:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden group"
          >
            {/* Tech Corner Crosshairs */}
            <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-[#E54522]/60" />
            <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-[#E54522]/60" />
            <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-[#E54522]/60" />
            <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-[#E54522]/60" />

            {/* Absolute watermark decor */}
            <div className="absolute -right-4 -bottom-1 text-neutral-100 font-display font-black text-8xl sm:text-9xl md:text-[11rem] opacity-30 select-none pointer-events-none translate-y-1/6 select-none leading-none">
              PQK
            </div>

            {/* Glowing dot */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 font-mono text-[9px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>PHILOSOPHY // ACTIVE</span>
            </div>
            
            <div className="relative z-10 space-y-6 max-w-5xl">
              <div className="flex items-center gap-1.5 text-[#E54522] font-mono text-xs font-black uppercase tracking-wider">
                <Target className="w-4 h-4 animate-pulse shrink-0" />
                <span>BẢN TUYÊN NGÔN SỨ MỆNH</span>
              </div>
              <p className="font-sans font-extralight text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-normal tracking-wide">
                "Tôi định hình bản thân thông qua sự <strong className="font-black bg-gradient-to-r from-[#E54522] to-neutral-900 bg-clip-text text-transparent">sáng tạo không giới hạn</strong> và nỗ lực <strong className="font-black bg-gradient-to-r from-neutral-900 to-[#E54522] bg-clip-text text-transparent">làm chủ công nghệ số</strong>, tạo ra giá trị bền vững cho doanh nghiệp."
              </p>
              
              <div className="pt-4 flex items-center gap-3">
                <div className="w-10 h-px bg-neutral-300" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#E54522] font-black">Phạm Quốc Khang "Spidermanz" // Marketing & Communication Specialist</span>
              </div>
            </div>
          </motion.div>

          {/* Portfolio & Digital Objectives - Bento Grid Layout with exquisite styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Column 1: Tầm nhìn cá nhân */}
            <motion.div 
              {...scrollRevealLeft}
              className="border border-neutral-200 bg-white shadow-xs rounded-2xl p-6 sm:p-10 relative flex flex-col justify-between hover:border-[#E54522]/80 hover:shadow-[0_20px_48px_rgba(229,69,34,0.06)] transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#E54522] animate-pulse" />
                    <span className="font-mono text-[10px] text-neutral-400 font-extrabold tracking-wider uppercase">[ MY DIRECTION // HORIZONS ]</span>
                  </div>
                  <span className="font-display font-black text-3xl text-neutral-200 group-hover:text-[#E54522] transition-colors">VISION</span>
                </div>
                
                <h4 className="font-display font-black text-xl sm:text-2xl text-neutral-950 uppercase tracking-tight leading-tight">
                  Tầm nhìn cá nhân <span className="text-[#E54522] font-serif font-normal italic lowercase">(/personal vision/)</span>
                </h4>
                
                <p className="font-sans text-neutral-700 text-sm leading-relaxed font-semibold">
                  Tập trung tích lũy kinh nghiệm thực chiến trong lĩnh vực Marketing. Mục tiêu của tôi là xây dựng một nền tảng kỹ năng số vững chắc, làm bệ phóng cho một lộ trình nghề nghiệp chuyên nghiệp và bền vững.
                </p>

                {/* Sub features / Bullet points with custom styling & icons */}
                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3 bg-neutral-50/50 p-3 rounded-xl border border-neutral-100 group-hover:bg-amber-50/30 transition-colors">
                    <div className="p-2 bg-white rounded-lg border border-neutral-200 text-[#E54522] shadow-2xs shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-mono font-bold text-neutral-900 uppercase">Tích lũy thực chiến</strong>
                      <span className="text-xs text-neutral-500 font-light mt-0.5 block leading-relaxed">Học hỏi liên tục thông qua việc thực nghiệm các chiến dịch và dự án Freelancer trực tiếp.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-neutral-50/50 p-3 rounded-xl border border-neutral-100 group-hover:bg-rose-50/30 transition-colors">
                    <div className="p-2 bg-white rounded-lg border border-neutral-200 text-[#E54522] shadow-2xs shrink-0">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-mono font-bold text-neutral-900 uppercase">Nền tảng kỹ năng số vững chắc</strong>
                      <span className="text-xs text-neutral-500 font-light mt-0.5 block leading-relaxed">Làm chủ các công cụ tối ưu công nghệ dữ liệu, thiết kế trải nghiệm web và quản trị đám mây.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-neutral-50/50 p-3 rounded-xl border border-neutral-100 group-hover:bg-orange-50/30 transition-colors">
                    <div className="p-2 bg-white rounded-lg border border-neutral-200 text-[#E54522] shadow-2xs shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-mono font-bold text-neutral-900 uppercase">Lộ trình sự nghiệp bền vững</strong>
                      <span className="text-xs text-neutral-500 font-light mt-0.5 block leading-relaxed">Xây dựng bước tiến nghề nghiệp chuẩn mực, mang tính thích ứng cao trước kỷ nguyên số biến đổi không ngừng.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Column 2: Sứ mệnh của Portfolio */}
            <motion.div 
              {...scrollRevealRight}
              className="border border-neutral-200 bg-white shadow-xs rounded-2xl p-6 sm:p-10 relative flex flex-col justify-between hover:border-[#E54522]/80 hover:shadow-[0_20px_48px_rgba(229,69,34,0.06)] transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#E54522] animate-pulse" />
                    <span className="font-mono text-[10px] text-neutral-400 font-extrabold tracking-wider uppercase">[ PORTFOLIO MISSION // HUB ]</span>
                  </div>
                  <span className="font-display font-black text-3xl text-neutral-200 group-hover:text-[#E54522] transition-colors">MISSION</span>
                </div>
                
                <h4 className="font-display font-black text-xl sm:text-2xl text-neutral-950 uppercase tracking-tight leading-tight">
                  Sứ mệnh của Portfolio <span className="text-[#E54522] font-serif font-normal italic lowercase">(/digital space/)</span>
                </h4>
                
                <p className="font-sans text-neutral-700 text-sm leading-relaxed font-semibold">
                  Không chỉ là nơi lưu trữ bài tập, đây là không gian tôi số hóa và chứng minh năng lực thực tế của mình (quản trị website, tối ưu AI, xử lý đa phương tiện) để gửi đến giảng viên và các nhà tuyển dụng tương lai.
                </p>

                {/* Sub features / Bullet points with custom styling & icons */}
                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3 bg-neutral-50/50 p-3 rounded-xl border border-neutral-100 group-hover:bg-blue-50/30 transition-colors">
                    <div className="p-2 bg-white rounded-lg border border-neutral-200 text-[#E54522] shadow-2xs shrink-0">
                      <Folder className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-mono font-bold text-neutral-900 uppercase">Hơn cả sự lưu trữ (Số hóa)</strong>
                      <span className="text-xs text-neutral-500 font-light mt-0.5 block leading-relaxed">Mỗi dự án học tập đều được hệ thống hóa chuyên nghiệp để mọi người dễ dàng tương tác thực tế.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-neutral-50/50 p-3 rounded-xl border border-neutral-100 group-hover:bg-emerald-50/30 transition-colors">
                    <div className="p-2 bg-white rounded-lg border border-neutral-200 text-[#E54522] shadow-2xs shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-mono font-bold text-neutral-900 uppercase">Chứng minh năng lực thực tế</strong>
                      <span className="text-xs text-neutral-500 font-light mt-0.5 block leading-relaxed">Khẳng định khả năng thực chiến qua Quản trị Website, Tối ưu AI & Prompt Eng, Xử lý đa phương tiện.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-neutral-50/50 p-3 rounded-xl border border-neutral-100 group-hover:bg-[#E54522]/5 transition-colors">
                    <div className="p-2 bg-white rounded-lg border border-neutral-200 text-[#E54522] shadow-2xs shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-mono font-bold text-neutral-900 uppercase">Kết nối Giảng viên và Nhà tuyển dụng</strong>
                      <span className="text-xs text-neutral-500 font-light mt-0.5 block leading-relaxed">Trở thành công cụ tương tác trực giác tuyệt vời để định vị uy tín học thuật và tuyển dụng hiệu quả.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* PROJECTS SECTION (Glassmorphic Grid) */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20 bg-transparent">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 bg-[#E54522]/10 text-[#E54522] px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-extrabold mb-4 border border-[#E54522]/20">
            [ SEC 03 // PORTFOLIO PRODUCTS ]
          </div>
          <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-[#111111] mb-3 leading-none">
            DỰ ÁN TIÊU BIỂU
          </h3>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#E54522] uppercase font-bold max-w-xl text-center leading-relaxed">
            Học phần thực hành năng lực và ứng dụng công nghệ trực quan
          </p>
        </div>

        {/* 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-25px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.04, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setSelectedProject(project)}
              className="bg-white/50 backdrop-blur-md border border-neutral-300/40 p-4 sm:p-5 md:p-6 flex flex-col justify-between rounded-2xl hover:scale-[1.03] hover:border-[#E54522]/90 hover:bg-white/70 transition-all duration-300 shadow-sm hover:shadow-[0_12px_32px_rgba(229,69,34,0.12)] group relative cursor-pointer"
            >
              {/* Glass subtle glowing absolute sphere */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#E54522] transition-colors" />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Custom exercise index/category */}
                  <div className="text-[#E54522] text-[9px] sm:text-xs font-mono font-extrabold tracking-widest uppercase mb-1.5">
                    {project.category}
                  </div>

                  <h4 className="font-display font-bold text-sm sm:text-base md:text-lg lg:text-xl text-neutral-900 mb-4 group-hover:text-[#E54522] transition-colors line-clamp-2 leading-tight h-[2.5em] flex items-center">
                    {project.title}
                  </h4>

                  <div className="space-y-4 text-xs sm:text-sm text-neutral-600 mb-6 font-sans">
                    {project.objective && (
                      <div className="leading-relaxed">
                        <span className="font-extrabold text-neutral-800 font-mono text-[9px] sm:text-xs uppercase block text-[#E54522] mb-1">Mục tiêu:</span>
                        <p className="text-neutral-700 font-normal leading-snug line-clamp-3 min-h-[3.6em]">{project.objective}</p>
                      </div>
                    )}
                    {project.practice && (
                      <div className="leading-relaxed">
                        <span className="font-extrabold text-neutral-800 font-mono text-[9px] sm:text-xs uppercase block text-[#E54522] mb-1">Thực hành:</span>
                        <p className="text-neutral-700 font-normal leading-snug line-clamp-3 min-h-[3.6em]">{project.practice}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* View details - Card action button with dynamic text */}
              <div className="mt-auto">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (project.documentUrl) {
                      window.open(project.documentUrl, "_blank", "noopener,noreferrer");
                    } else {
                      setSelectedProject(project);
                    }
                  }}
                  className="w-full inline-flex items-center justify-between py-2 sm:py-2.5 px-3 sm:px-4 text-[10px] sm:text-xs font-mono font-black border border-neutral-300/60 hover:border-[#E54522]/80 hover:bg-[#E54522] hover:text-white bg-white/40 text-neutral-800 uppercase tracking-widest rounded-lg transition-all duration-300 cursor-pointer shadow-xs"
                >
                  <span>{project.buttonText || "Xem sản phẩm"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E54522] group-hover:text-white transition-colors shrink-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: KỸ NĂNG & TRẢI NGHIỆM */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-200 scroll-mt-20 bg-transparent">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 bg-[#E54522]/10 text-[#E54522] px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-extrabold mb-4 border border-[#E54522]/20">
            [ SEC 04 // SKILLS & EXPERIENCE ]
          </div>
          <h3 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#111111] mb-2 leading-none">
            KỸ NĂNG & TRẢI NGHIỆM
          </h3>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#E54522] uppercase font-bold max-w-xl text-center leading-relaxed">
            Sự giao thoa giữa tư duy kỹ thuật số hiện đại và tính kỷ luật thực thi tỉ mỉ
          </p>
        </div>

        {/* Beautiful Two-Column Grid: Skills on Left, Personal Narrative Experience on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Skills Blocks */}
          <motion.div 
            {...scrollRevealLeft}
            className="lg:col-span-7 space-y-6"
          >
            <div className="border-b-2 border-neutral-900 pb-4 mb-6">
              <h4 className="font-mono text-xs font-black text-[#E54522] uppercase tracking-[0.2em]">
                // NĂNG LỰC SỐ CỐT LÕI
              </h4>
            </div>

            {/* Skill Block 1: Quản lý hệ thống số */}
            <div className="border border-neutral-300 p-6 bg-white hover:border-[#E54522]/85 hover:scale-[1.01] transition-all duration-300 shadow-sm relative group">
              <div className="absolute top-4 right-4 text-xs font-mono font-black text-neutral-300 group-hover:text-[#E54522] transition-colors bg-neutral-100 px-2 py-1 rounded select-none">
                CORE
              </div>
              <h5 className="font-display font-black text-lg text-neutral-900 uppercase tracking-tight mb-2">
                Quản lý hệ thống số <span className="text-[#E54522] font-light lowercase">(/website, web-hosting/)</span>
              </h5>
              <p className="font-sans font-light text-sm text-neutral-600 leading-relaxed mb-4">
                Thiết lập hạ tầng truyền thông và xuất bản web chất lượng cao. Khả năng độc lập đăng ký, trỏ DNS, quản trị Hosting bảo mật và xây dựng nền tảng thông tin trực tuyến đồng bộ hiệu quả bền vững.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Domain Mapping</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">DNS Records</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Cloud Hosting</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Server Up</span>
              </div>
            </div>

            {/* Skill Block 2: Tối ưu hóa AI */}
            <div className="border border-neutral-300 p-6 bg-white hover:border-[#E54522]/85 hover:scale-[1.01] transition-all duration-300 shadow-sm relative group">
              <div className="absolute top-4 right-4 text-xs font-mono font-black text-neutral-300 group-hover:text-[#E54522] transition-colors bg-neutral-100 px-2 py-1 rounded select-none">
                INTEL
              </div>
              <h5 className="font-display font-black text-lg text-neutral-900 uppercase tracking-tight mb-2">
                Tối ưu hóa AI <span className="text-[#E54522] font-light lowercase">(/gemini, chatgpt, prompts/)</span>
              </h5>
              <p className="font-sans font-light text-sm text-neutral-600 leading-relaxed mb-4">
                Thành thạo khai thác bộ lệnh (Prompt Engineering) nâng cao. Biến trí tuệ nhân tạo thành cộng sự đắc lực giúp tối ưu hóa tiến độ làm việc, nghiên cứu tài liệu thị trường và lên ý tưởng chiến dịch truyền thông đa phương tiện vượt trội.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Prompt Engineering</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">LLM Grounding</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Task Automation</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Workflow Optimization</span>
              </div>
            </div>

            {/* Skill Block 3: Tư duy Logic */}
            <div className="border border-neutral-300 p-6 bg-white hover:border-[#E54522]/85 hover:scale-[1.01] transition-all duration-300 shadow-sm relative group">
              <div className="absolute top-4 right-4 text-xs font-mono font-black text-neutral-300 group-hover:text-[#E54522] transition-colors bg-neutral-100 px-2 py-1 rounded select-none">
                LOGIC
              </div>
              <h5 className="font-display font-black text-lg text-neutral-900 uppercase tracking-tight mb-2">
                Tư duy Logic <span className="text-[#E54522] font-light lowercase">(/information architecture/)</span>
              </h5>
              <p className="font-sans font-light text-sm text-neutral-600 leading-relaxed mb-4">
                Kiến thiết cấu trúc nội dung lớp lang, khoa học. Sắp xếp hệ thống thông tin trực tuyến mạch lạc rõ ràng giúp tối ưu hóa hành trình người dùng (User Journey Map) và gia tăng độ tin cậy của tài liệu tiếp thị.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">UX/UI Architecture</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Sitemap Planning</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">User Journey</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 uppercase">Logical Structuring</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Personal Reflection Experience Card */}
          <motion.div 
            {...scrollRevealRight}
            className="lg:col-span-5"
          >
            <div className="border-b-2 border-neutral-900 pb-4 mb-6">
              <h4 className="font-mono text-xs font-black text-[#E54522] uppercase tracking-[0.2em]">
                // HÀNH TRÌNH THỰC TIỄN
              </h4>
            </div>

            <div className="bg-zinc-50 border-3 border-neutral-900 p-8 sm:p-10 relative shadow-[6px_6px_0px_#111111] hover:shadow-[8px_8px_0px_#E54522] transition-shadow duration-300 leading-relaxed space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#E54522] font-extrabold uppercase bg-[#E54522]/10 px-2.5 py-1 inline-block">
                  TRẢI NGHIỆM ĐẮT GIÁ
                </span>
                <h4 className="font-display font-black text-2xl text-neutral-900 uppercase tracking-tight">
                  TỰ THIẾT KẾ WEB & KỶ LUẬT THỰC THI
                </h4>
              </div>

              <div className="font-sans font-light text-neutral-700 space-y-5 text-sm sm:text-base">
                <p>
                  Hành trình <strong className="font-bold text-neutral-900">tự nghiên cứu, thiết kế và trực tiếp tối ưu hóa</strong> hệ thống Portfolio trực tuyến này là minh chứng rõ nét nhất cho tinh thần tự lập rèn luyện bền bỉ của bản thân tôi. Để chuyển dịch các ý tưởng truyền thông thành một giao diện mượt mà và trực quan, tôi đã bắt bản thân tuân thủ một lộ trình làm việc khắt khe và kỷ luật tự giác cao độ.
                </p>
                <p>
                  Từng pixel bố cục, độ giãn padding đến sự căn chỉnh các khối chữ đều đòi hỏi <strong className="font-medium text-neutral-950">sự tỉ mỉ, kiên nhẫn đến tuyệt đối</strong>. Quá trình này đã rèn giũa cho tôi thói quen tư duy đột phá, rèn tính cẩn trọng tỉ mỉ, đồng thời nuôi dưỡng kỹ năng tiếp cận độc lập để xử lý các vấn đề lỗi hạ tầng một cách khoa học.
                </p>
              </div>

              <div className="bg-white p-5 border-l-4 border-[#E54522] shadow-xs">
                <span className="font-mono text-[9px] text-[#E54522] font-black uppercase tracking-wider block mb-1.5">
                  ĐIỂM TÂM ĐẮC NHẤT
                </span>
                <p className="font-sans font-medium text-[#111111] italic text-sm leading-relaxed">
                  "Điều tôi tâm đắc nhất không chỉ dừng lại ở việc hoàn chỉnh thành công một hồ sơ trực tuyến trực quan chỉnh chu để trình bày trước nhà tuyển dụng, mà qua đó tôi đã tự khẳng định tinh thần dám bứt phá, sẵn sàng hệ thống số hóa tư liệu để chuẩn bị hoàn hảo nhất cho công việc chuyên nghiệp."
                </p>
              </div>

              {/* Status Indicator */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase font-extrabold tracking-wider text-neutral-600">
                    Hồ sơ sẵn sàng 24/7
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-400 font-bold">PQK // PORTFOLIO</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER & CONTACT (Dark Pitch-Black Theme #0a0a0a) */}
      <footer className="bg-[#0a0a0a] text-white pt-24 pb-16 relative overflow-hidden border-t border-zinc-800">
        {/* Subtle geometric linear decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E54522]/30 to-transparent" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#E54522]/5 rounded-full blur-3xl pointer-events-none select-none z-0" />

        <motion.div 
          {...scrollRevealUp}
          className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center"
        >
          <Cog className="text-[#E54522]/80 w-10 h-10 mb-6 animate-spin-slow shrink-0" />
          
          <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight uppercase max-w-5xl mb-12 text-center">
            RẤT HÂN HẠNH ĐƯỢC ĐỒNG HÀNH CÙNG QUÝ CÔNG TY
          </h3>

          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-neutral-400 font-mono text-[10px] md:text-xs py-2 px-6 uppercase tracking-widest mb-10 select-none rounded">
            THÔNG TIN LIÊN HỆ
          </div>

          {/* Info listing block centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full mb-12 border-b border-zinc-800 pb-12 text-sm font-mono text-zinc-400">
            <div 
              className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
              onClick={() => handleCopy("Hà Đông City, Hà Nội.", "Địa chỉ")}
            >
              <div className="p-2 sm:p-2.5 bg-[#E54522]/10 rounded-lg text-[#E54522] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Địa chỉ văn phòng</div>
                <div className="text-sm font-sans mt-0.5">Hà Đông City</div>
              </div>
            </div>

            <div 
              className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
              onClick={() => handleCopy("u25080084@hsb.edu.vn", "Email")}
            >
              <div className="p-2 sm:p-2.5 bg-[#E54522]/10 rounded-lg text-[#E54522] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Email công việc</div>
                <div className="text-sm font-sans mt-0.5 break-all">u25080084@hsb.edu.vn</div>
              </div>
            </div>
          </div>

          {/* Core Call-to-actions requested by user: LIÊN HỆ PHỎNG VẤN (Direct link to Facebook profile) */}
          <div className="flex flex-col items-center justify-center w-full max-w-sm mb-20">
            <a 
              href="https://www.facebook.com/khang.beat.9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#E54522] hover:bg-white hover:text-neutral-950 border-2 border-[#E54522] hover:border-neutral-950 text-white font-display font-black py-4 px-10 tracking-widest uppercase text-xs rounded-xl transition-all duration-300 cursor-pointer shadow-[0_8px_24px_rgba(229,69,34,0.3)] hover:shadow-none text-center"
            >
              <Facebook className="w-4 h-4" />
              <span>LIÊN HỆ PHỎNG VẤN</span>
            </a>
          </div>

          {/* Social icons row and copyrights */}
          <div className="w-full mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row gap-6 justify-between items-center text-xs text-zinc-500">
            <p className="font-mono text-center md:text-left">
              © 2026 Phạm Quốc Khang. All rights reserved.
            </p>

            <div className="flex gap-6 items-center">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E54522] text-[#cccccc] transition-colors flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-semibold">
                <Linkedin className="w-3.5 h-3.5 text-[#E54522]" /> LinkedIn
              </a>
              <a href="https://www.facebook.com/khang.beat.9" target="_blank" rel="noopener noreferrer" className="hover:text-[#E54522] text-[#cccccc] transition-colors flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-semibold">
                <Facebook className="w-3.5 h-3.5 text-[#E54522]" /> Facebook
              </a>
              <span className="text-zinc-800 select-none">|</span>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#E54522] text-[#cccccc] transition-colors flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider font-semibold">
                Behance <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </footer>

      {/* PROJECT DETAILS OVERLAY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#111111]/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              className="bg-white border-2 border-[#111111] max-w-2xl w-full p-6 md:p-10 rounded-none shadow-[10px_10px_0px_#E54522] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close top right */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 bg-neutral-100 hover:bg-[#E54522] hover:text-white transition-all p-2 rounded-none border border-neutral-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-[#E54522] text-white text-[10px] font-mono px-3 py-1.5 uppercase tracking-widest inline-block mb-4 font-bold">
                {selectedProject.category}
              </div>

              <h3 className="font-display font-black text-2xl md:text-3xl text-[#111111] leading-tight mb-4">
                {selectedProject.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <strong className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">MÔ TẢ CHI TIẾT</strong>
                  <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="bg-[#F4F4F2] p-5 border-l-4 border-[#E54522]">
                  <strong className="block text-xs uppercase font-mono tracking-widest text-[#E54522] mb-1.5 font-bold">KẾT QUẢ/ĐÓNG GÓP TIÊU BIỂU</strong>
                  <p className="text-neutral-900 text-sm md:text-base font-semibold leading-relaxed italic">
                    {selectedProject.detailedOutcome}
                  </p>
                </div>

                <div>
                  <strong className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2.5">CÔNG CỤ SỬ DỤNG</strong>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, idx) => (
                      <span key={idx} className="bg-neutral-100 text-neutral-800 border-2 border-neutral-200 text-xs font-mono font-bold py-1 px-3">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">TAGS</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="text-[#E54522] text-xs font-mono">
                        #{tag} &bull;
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap gap-3 sm:gap-4">
                {selectedProject.documentUrl && (
                  <a
                    href={selectedProject.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E54522] text-white text-xs font-display font-bold py-3 px-6 uppercase tracking-wider hover:bg-[#111111] transition-all flex items-center gap-2 shadow-[4px_4px_0px_#111111]"
                  >
                    <span>Mở Báo Cáo Google Docs</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </a>
                )}
                <a
                  href="https://www.facebook.com/khang.beat.9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white text-xs font-display font-bold py-3 px-6 uppercase tracking-wider hover:bg-[#E54522] transition-colors inline-block text-center cursor-pointer"
                >
                  Liên hệ phỏng vấn
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-transparent border border-neutral-300 text-neutral-600 text-xs font-display font-bold py-3 px-6 uppercase tracking-wider hover:bg-neutral-50 transition-colors ml-auto animate-none"
                >
                  Quay lại
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RECRUITER CONTACT FORM MODAL */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#111111]/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              className="bg-white border-2 border-[#111111] max-w-lg w-full p-6 md:p-8 rounded-none shadow-[10px_10px_0px_#E54522] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close top right */}
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 bg-neutral-100 hover:bg-[#E54522] hover:text-white transition-all p-2 rounded-none border border-neutral-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Cog className="text-[#E54522] w-5 h-5 animate-spin-slow shrink-0" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#E54522] font-extrabold">PHÒNG NHÂN SỰ ĐỀ XUẤT</span>
              </div>

              <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight mb-4">
                THƯ CỦA NHÀ TUYỂN DỤNG
              </h3>
              
              <p className="text-xs text-neutral-500 mb-6 font-sans leading-relaxed">
                Xin vui lòng điền các thông tin liên hệ và lịch phỏng vấn bên dưới để hệ thống chuyển trực tiếp về Telegram cá nhân & Email của đại sứ Phạm Quốc Khang.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-600 mb-1.5 font-bold">
                    Họ và tên Người liên hệ <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="VD: Anh Minh / Chị Lan"
                    className="w-full bg-neutral-50 border-2 border-neutral-200 focus:border-[#E54522] focus:bg-white outline-none px-4 py-2.5 text-sm font-sans transition-all rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-600 mb-1.5 font-bold">
                    Tên Doanh nghiệp / Công ty
                  </label>
                  <input 
                    type="text" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="VD: Viettel, VCCorp, v.v."
                    className="w-full bg-neutral-50 border-2 border-neutral-200 focus:border-[#E54522] focus:bg-white outline-none px-4 py-2.5 text-sm font-sans transition-all rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-neutral-600 mb-1.5 font-bold">
                      Email liên hệ <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hr@congty.com"
                      className="w-full bg-neutral-50 border-2 border-neutral-200 focus:border-[#E54522] focus:bg-white outline-none px-4 py-2.5 text-sm font-sans transition-all rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-neutral-600 mb-1.5 font-bold">
                      Số điện thoại
                    </label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09xx.xxx.xxx"
                      className="w-full bg-neutral-50 border-2 border-neutral-200 focus:border-[#E54522] focus:bg-white outline-none px-4 py-2.5 text-sm font-sans transition-all rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-600 mb-1.5 font-bold">
                    Lời nhắn / Lời mời phỏng vấn & Đề xuất lương
                  </label>
                  <textarea 
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Chào Quốc Khang, chúng tôi xem portfolio của bạn và rất ấn tượng..."
                    className="w-full bg-neutral-50 border-2 border-neutral-200 focus:border-[#E54522] focus:bg-white outline-none px-4 py-2.5 text-sm font-sans transition-all rounded-none resize-none"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#E54522] hover:bg-[#111111] text-white font-display font-extrabold text-xs py-3 px-6 uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Đang gửi thư...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>GỬI LỜI MỜI PHÒNG VẤN</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(false)}
                    className="bg-transparent border border-neutral-300 text-neutral-600 font-display font-bold text-xs py-3 px-5 uppercase tracking-wider hover:bg-neutral-50 transition-colors"
                  >
                    ĐÓNG
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

