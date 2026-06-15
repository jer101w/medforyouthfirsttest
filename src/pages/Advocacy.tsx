import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Video, 
  Users, 
  FileText, 
  CheckCircle, 
  Flame, 
  PenTool, 
  Share2, 
  Play, 
  Clock, 
  MapPin, 
  Award 
} from "lucide-react";

interface Signature {
  id: string;
  name: string;
  relation: string;
  date: string;
  comment?: string;
}

const mockVideos = [
  {
    id: "v1",
    student: "Aria M., 7th Grade",
    title: "Bringing Clinics Direct to Low-Income Schools",
    duration: "2:15",
    topic: "Parents with busy schedules or no transport shouldn't mean kids miss basic medical checkups.",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80",
    embed: "Placeholder for Aria's presentation"
  },
  {
    id: "v2",
    student: "Nolan K., 9th Grade",
    title: "Why School-Based Mobile Care Prevents Major Illness",
    duration: "1:45",
    topic: "On-campus health screenings catch health conditions early before they become medical emergencies.",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
    embed: "Placeholder for Nolan's presentation"
  },
  {
    id: "v3",
    student: "Justin L., 6th Grade",
    title: "Dental Deserts in Southern California Communities",
    duration: "2:02",
    topic: "A mobile clinic at school can provide cleanings and sealants, avoiding missing school for dental pain.",
    thumbnail: "https://images.unsplash.com/photo-1516534775068-ba3e84589d90?auto=format&fit=crop&w=400&q=80",
    embed: "Placeholder for Justin's presentation"
  },
  {
    id: "v4",
    student: "Saeed H., 5th Grade",
    title: "Empathetic Access: A Doctor at My School",
    duration: "1:30",
    topic: "Going to the doctor doesn't have to be hard or scary when the clinic is a friendly camper parked outside.",
    thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80",
    embed: "Placeholder for Saeed's presentation"
  },
  {
    id: "v5",
    student: "Chloe W., 8th Grade",
    title: "Mental and Vision Support for Teens",
    duration: "2:20",
    topic: "Many 5th to 10th graders struggle to focus simply because they cannot afford regular eye exams and glasses.",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
    embed: "Placeholder for Chloe's presentation"
  },
  {
    id: "v6",
    student: "Marcus G., 10th Grade",
    title: "The Math of Mobile Medicine: AB-2229 ROI",
    duration: "2:35",
    topic: "Investing in preventative mobile school clinics saves county hospitals millions in averted ER visits.",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
    embed: "Placeholder for Marcus's presentation"
  }
];

const initialSignatures: Signature[] = [
  { id: "1", name: "Dr. Sarah Smith", relation: "Pediatrician & Parent", date: "June 9, 2026", comment: "This is an absolute necessity. Mobile health clinics in schools build structural wellness!" },
  { id: "2", name: "David Johnson", relation: "Local High School Teacher", date: "June 9, 2026", comment: "Our middle and high school students deserve to have checkups on campus without barrier." },
  { id: "3", name: "Maria Garcia", relation: "Community Neighbor", date: "June 8, 2026", comment: "Fully backing these students. Funding AB-2229 is the right choose for California's children!" },
  { id: "4", name: "Jeremy Wang", relation: "Med For Youth Founder", date: "June 8, 2026", comment: "Super proud of all 15 young leaders speaking up for our community!" }
];

export function Advocacy() {
  const [activeVideo, setActiveVideo] = useState<typeof mockVideos[0] | null>(null);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-xs uppercase tracking-wider mb-6">
          <Flame className="w-4 h-4 text-brand-600 animate-pulse" /> Active Campaign: Legislative Support Drive
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight mb-6">
          Assembly Bill 2229: Mobile School-Clinic Resource Grants
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
          15 young leaders in our community are campaigning to pass California <strong>Assembly Bill 2229 (AB-2229)</strong>, establishing state-funded mobile medical, dental, and vision clinic grants for Title-I public schools to serve all 5th to 10th graders on-campus. Read about the bill, watch speech videos, and join our drive!
        </p>
      </div>

      {/* THREE-COLUMN STATS / SUMMARY */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 flex items-center gap-4">
          <div className="bg-brand-50 p-4 rounded-xl text-brand-600">
            <Heart className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">AB-2229</h3>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">The Target Bill</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 flex items-center gap-4">
          <div className="bg-brand-50 p-4 rounded-xl text-brand-600">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">15 Student Leaders</h3>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Creating Change</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 flex items-center gap-4">
          <div className="bg-brand-50 p-4 rounded-xl text-brand-600">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Active Campaign</h3>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Drive For Support</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start">
        {/* BILL & PROPOSITION EXPLANATION */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-3xl font-bold text-brand-900 flex items-center gap-2">
            <FileText className="w-8 h-8 text-brand-600" />
            Why This Resolution Matters
          </h2>

          <div className="prose prose-slate bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">The Goal:</h3>
              <p className="text-slate-600 leading-relaxed">
                Our public schools are the single most effective places to deliver key pediatric health screenings. By supporting California AB-2229, state grants will establish mobile medical, dental, and vision clinics that arrive directly on-campus, serving students who face structural transport and parent work schedule boundaries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <h4 className="font-bold text-emerald-850 mb-1 flex items-center gap-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  State Grant Funded
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Uses pre-allocated California health grants. No local school budget cuts!
                </p>
              </div>

              <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <h4 className="font-bold text-emerald-850 mb-1 flex items-center gap-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Durable Preventative Care
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Catches chronic dental, eye, and cardiac issues early before they lead to emergency room admissions.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-600" />
                The Power of 15 Voices
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than advocating for individual issues, our 15 middle and high school students are working as a unit to advocate for this single state bill. Every student in 5th to 10th grade deserves to have barriers to preventative care removed right at their school.
              </p>
            </div>
          </div>
        </div>

        {/* PETITION SECTION */}
        <div className="lg:col-span-5 bg-brand-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col h-full min-h-[620px]">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none"></div>

          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <PenTool className="w-6 h-6 text-brand-300" />
            Sign our AB-2229 Support Drive
          </h2>
          <p className="text-brand-100 text-sm mb-6 leading-relaxed">
            By signing, you voice support for California Assembly Bill 2229 to fund mobile pediatric clinic grants for underserved public schools.
          </p>

          <div className="flex-grow bg-white rounded-2xl overflow-hidden border border-brand-850 shadow-inner p-1 relative flex flex-col min-h-[450px]">
            {/* Embedded Google Form iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSflDjeNJbC6cPf5Nh6Yz_HHmRy0iJmpExwCflmF0NC2YbqasA/viewform?embedded=true"
              className="w-full h-full min-h-[400px] border-0 rounded-xl"
              title="Sign AB-2229 Support Drive"
            >
              Loading…
            </iframe>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflDjeNJbC6cPf5Nh6Yz_HHmRy0iJmpExwCflmF0NC2YbqasA/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-brand-800 hover:bg-brand-700 text-white font-semibold rounded-xl text-xs transition-colors border border-brand-700 flex items-center justify-center gap-2"
            >
              🚀 Open Petition Form in New Tab
            </a>
            <p className="text-xxs text-center text-brand-300">
              Your signature is collected securely and instantly synchronized to our project database.
            </p>
          </div>
        </div>
      </div>

      {/* VIDEOS SHOWCASE GRID */}
      <div className="mb-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-3 flex items-center gap-2">
            <Video className="w-8 h-8 text-brand-600" />
            Watch Student Advocacy Speeches
          </h2>
          <p className="text-slate-600 font-medium">
            Take a look at how our students learn to advocate for public health policy! Click on any student card to listen to their call to action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockVideos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -5 }}
              onClick={() => setActiveVideo(video)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col group"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.student}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-brand-600 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-1 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-brand-900/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {video.duration}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">{video.student}</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug group-hover:text-brand-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-auto">{video.topic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL MODIFIER */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-slate-100 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div>
                  <h4 className="font-bold text-slate-900">{activeVideo.title}</h4>
                  <p className="text-xs text-brand-600 font-semibold">{activeVideo.student}</p>
                </div>
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="p-1 px-3 bg-slate-200 text-slate-700 hover:bg-slate-300 font-bold rounded-lg text-sm transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Video Player Mock */}
              <div className="relative aspect-video bg-black flex flex-col items-center justify-center text-white text-center p-8">
                <Heart className="w-16 h-16 text-brand-500 animate-pulse mb-4" />
                <h5 className="font-bold text-xl mb-2">Simulated Speech Presentation</h5>
                <p className="text-sm text-slate-300 max-w-md">
                  In a real context, students from Med For Youth record their final speech session presenting their AB-2229 research and advocacy points here.
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-brand-900/90 p-4 border-t border-brand-800 text-xs italic">
                  "{activeVideo.topic}"
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
