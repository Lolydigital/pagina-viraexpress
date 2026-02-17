import React, { useState, useEffect } from 'react';
import {
  Zap, Check, Play, Users,
  MessageSquare, TrendingUp, Trophy, ArrowRight,
  ShieldCheck, HelpCircle, ShoppingBag,
  Scale, Smartphone, Laptop, Target, BarChart3,
  DollarSign, Sparkles, AlertCircle, Camera, Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [activeTab, setActiveTab] = useState<'shopee' | 'pro' | 'universal'>('universal');

  // PROFIT CALCULATOR STATE
  const [views, setViews] = useState(500000); // 500k views
  const [conversion, setConversion] = useState(0.5); // 0.5% conversion
  const [ticket, setTicket] = useState(47); // R$ 47 ticket

  const potentialEarnings = (views * (conversion / 100) * ticket);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden font-sans bg-grid">

      {/* 1. FLOATING PROFIT BAR */}
      <div className="bg-gradient-to-r from-neon-pink via-neon-purple to-indigo-600 py-3 px-4 text-center text-[11px] md:text-sm font-black uppercase tracking-[0.2em] sticky top-0 z-[100] shadow-[0_0_30px_rgba(255,0,110,0.4)]">
        ⚡ ÚLTIMO DIA: OFERTA LIBERADA POR R$ 47,00 ACABA EM <span className="underline decoration-2 underline-offset-4 decoration-white">{formatTime(timeLeft)}</span>
      </div>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-40 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-cyan/10 blur-[150px] rounded-full -z-10"></div>

          <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-neon-cyan animate-pulse">
                <Target className="w-4 h-4" /> Método Viral 2026
              </div>

              <h1 className="text-4xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
                FATURA MAIS DE <span className="text-neon-green text-glow">R$ 1.000</span> <br />
                <span className="gradient-text-viral">POR SEMANA</span> COM <br />
                <span className="relative">
                  OBJETOS FALANTES
                  <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-2 md:h-4 bg-neon-pink/30 -skew-x-12 -z-10"></span>
                </span>
              </h1>

              <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-xl font-bold uppercase tracking-tighter leading-tight">
                A ferramenta de IA que cria "personagens irrecusáveis" em 60 segundos <br className="hidden md:block" />
                e <span className="text-white">destrava o algoritmo</span> do TikTok e Instagram.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                <button className="w-full md:w-auto bg-neon-green hover:bg-neon-green/90 text-black px-12 py-6 rounded-2xl text-lg md:text-xl font-black uppercase tracking-wider transition-all shadow-[0_0_40px_rgba(57,255,20,0.3)] active:scale-95 flex items-center justify-center gap-4">
                  QUERO MEU ACESSO <ArrowRight className="w-6 h-6" />
                </button>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-[#020617]" alt="User" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold border-2 border-[#020617]">+1k</div>
                </div>
              </div>
            </motion.div>

            {/* HERO VIDEO / MOCKUP */}
            <motion.div
              initial={{ size: 0.8, opacity: 0 }}
              animate={{ size: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 group cursor-pointer shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                alt="Objeto Viral"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-neon-cyan backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,243,255,0.5)] group-hover:scale-110 transition-all">
                  <Play className="w-10 h-10 md:w-14 md:h-14 fill-black text-black ml-2" />
                </div>
              </div>
              <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-20 text-left">
                <p className="text-neon-cyan font-black uppercase tracking-widest text-[10px] md:text-xs italic mb-2">Aperte o Play</p>
                <h3 className="text-xl md:text-3xl font-black italic uppercase leading-none">Veja a Magia do <br /> Objeto Falante</h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. PROFIT SIMULATOR (HIGH CONVERSION) */}
        <section className="py-20 bg-white/5 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase italic leading-none">
                Vej quanto você <br /> <span className="text-neon-green">pode lucrar</span>
              </h2>
              <p className="text-gray-400 text-lg font-bold uppercase tracking-tight italic">
                Simule seus ganhos baseados em visualizações virais
              </p>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between font-black uppercase text-xs tracking-widest">
                    <span>Visualizações Mensais</span>
                    <span className="text-neon-cyan">{views.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="10000" max="5000000" step="50000" value={views}
                    onChange={(e) => setViews(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between font-black uppercase text-xs tracking-widest">
                    <span>Taxa de Conversão</span>
                    <span className="text-neon-pink">{conversion}%</span>
                  </div>
                  <input
                    type="range" min="0.1" max="2" step="0.1" value={conversion}
                    onChange={(e) => setConversion(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-pink"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card p-10 md:p-16 rounded-[3rem] text-center space-y-8 border-neon-cyan/10 bg-neon-cyan/5">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">Lucro Potencial Estimado</p>
              <h3 className="text-6xl md:text-8xl font-black italic text-glow tracking-tighter">
                R$ {potentialEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h3>
              <p className="text-[10px] font-black uppercase text-neon-green animate-pulse">Baseado em ticket médio de R$ 47,00</p>
              <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase text-sm tracking-widest transition-all hover:bg-neon-cyan">
                Quero Lucre Isso Agora
              </button>
            </div>
          </div>
        </section>

        {/* 4. O QUE UM OBJETO PODE FAZER (GRID) */}
        <section className="py-20 md:py-40 max-w-7xl mx-auto px-6 space-y-20">
          <h2 className="text-center text-4xl md:text-7xl font-black italic uppercase leading-none">
            O Objeto é o Seu <br /> <span className="gradient-text-viral">Vendedor 24h</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Seu Perfil de IA', desc: 'Crie autoridade sem expor seu rosto real.', icon: <Users className="text-neon-cyan" /> },
              { title: 'Seu Canal Dark', desc: 'Produza 10 vídeos por dia com facilidade total.', icon: <Video className="text-neon-pink" /> },
              { title: 'Seu Produto Shopee', desc: 'Dê voz aos seus achadinhos e multiplique cliques.', icon: <ShoppingBag className="text-neon-green" /> },
              { title: 'Sua Loja Dropshipping', desc: 'Personagens Pixar que fazem o "unboxing" por você.', icon: <Laptop className="text-neon-yellow" /> },
              { title: 'Seu Serviço Local', desc: 'Atraia clientes para sua clínica ou escritório.', icon: <Target className="text-neon-purple" /> },
              { title: 'Seu Negócio Viral', desc: 'Domine a aba Explore com criativos absurdos.', icon: <Sparkles className="text-white" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-neon-cyan/20 transition-all group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black uppercase italic italic mb-4">{item.title}</h4>
                <p className="text-gray-500 font-bold uppercase text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SHOWCASE: EXAMPLES */}
        <section className="py-32 bg-white/2 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Personagens que <span className="text-neon-pink">Viciam</span></h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Exemplos reais feitos com nossa ferramenta</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { img: 'https://images.unsplash.com/photo-1542291026-7eec264c2741?w=600', label: 'Tênis Falante' },
                { img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600', label: 'Livro Jurídico' },
                { img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600', label: 'Game Boy Retro' },
                { img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600', label: 'Abstrato Viral' }
              ].map((item, i) => (
                <div key={i} className="relative group rounded-3xl overflow-hidden aspect-[4/5] border border-white/10">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 font-black uppercase tracking-widest text-xs italic">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHAT YOU GET (REVEAL) */}
        <section className="py-20 md:py-40">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-20">
            <div className="space-y-8">
              <span className="text-neon-yellow font-black uppercase text-sm tracking-[0.5em] italic">O Arsenal Completo</span>
              <h2 className="text-4xl md:text-8xl font-black italic uppercase leading-none italic">
                O QUE VOCÊ VAI <br /> <span className="text-glow-cyan text-white">RECEBER</span>
              </h2>
            </div>

            <div className="relative glass-card p-4 rounded-[3.5rem] md:rounded-[5rem] overflow-hidden border-neon-cyan/20">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200"
                className="w-full rounded-[3rem] md:rounded-[4.5rem] opacity-40"
                alt="Member Area"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-20 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl">
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left">
                    <h4 className="text-neon-cyan font-black italic uppercase mb-2">Character Library</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Acesso a +50 modelos exclusivos 3D Pixar de alto nível.</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left">
                    <h4 className="text-neon-pink font-black italic uppercase mb-2">Prompt Master IA</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Nossa IA gera o roteiro perfeito focado em retenção.</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left">
                    <h4 className="text-neon-green font-black italic uppercase mb-2">Viral Score Tool</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Analise o potencial viral antes de postar o vídeo.</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left">
                    <h4 className="text-neon-yellow font-black italic uppercase mb-2">Tutorial Expresso</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Do zero ao primeiro vídeo em menos de 5 minutos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE OFFER BLOCK (HIGH IMPACT) */}
        <section id="pricing" className="py-20 md:py-40 px-6 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200')] bg-fixed opacity-10 bg-center bg-cover"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="glass-card bg-black/60 border-neon-cyan/30 rounded-[4rem] p-10 md:p-20 flex flex-col items-center text-center space-y-12">
              <div className="space-y-4">
                <span className="bg-neon-pink px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase italic text-black">OFERTA ÚNICA: HOJE</span>
                <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">VIRA EX<span className="text-neon-cyan">PRESS</span></h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">Acesso Vitalício + Todos os Bônus</p>
              </div>

              <div className="w-full space-y-4">
                {[
                  'Gerador de Imagens Pixar 8K',
                  'IA Storytelling Pro',
                  'Fim da Marca d\'água (Pano Pro)',
                  'Módulo Shopee Lucrativo',
                  'Suporte VIP via Zap'
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="flex items-center gap-4 text-xs font-black uppercase tracking-widest leading-none">
                      <Check className="text-neon-green w-5 h-5" /> {item}
                    </span>
                    <span className="text-neon-green font-black uppercase text-[10px] italic">INCLUSO</span>
                  </div>
                ))}
              </div>

              <div className="pt-10 flex flex-col items-center space-y-4">
                <p className="text-xl md:text-2xl font-black uppercase tracking-widest opacity-40 italic"><s>POR R$ 497,00</s></p>
                <div className="flex items-baseline gap-4 scale-110">
                  <span className="text-xs md:text-2xl font-black uppercase italic tracking-widest text-neon-cyan">POR APENAS 12x</span>
                  <span className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-none text-glow">R$ 4,<span className="text-neon-pink">71</span></span>
                </div>
                <p className="text-2xl font-black uppercase tracking-widest opacity-60 italic">OU R$ 47,00 À VISTA</p>
              </div>

              <button className="w-full bg-neon-green text-black py-8 md:py-10 rounded-2xl text-sm md:text-2xl font-black uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(57,255,20,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-6 group">
                DESTRAVAR ACESSO AGORA <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/cartao-visa-logo-5.png" alt="Visa" className="h-4 brightness-0 invert" />
                <img src="https://logodownload.org/wp-content/uploads/2014/10/mastercard-logo-2.png" alt="Mastercard" className="h-6 brightness-0 invert" />
                <img src="https://logodownload.org/wp-content/uploads/2021/04/pix-logo-4.png" alt="PIX" className="h-6 brightness-0 invert" />
              </div>
            </div>
          </div>
        </section>

        {/* 8. GUARANTEE */}
        <section className="py-20 md:py-40 text-center space-y-12">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative group">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-3xl animate-pulse group-hover:bg-neon-pink/20 transition-colors"></div>
            <ShieldCheck className="w-full h-full text-neon-cyan relative z-10 group-hover:text-neon-pink transition-colors" />
          </div>
          <div className="max-w-3xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter italic">RISCO <span className="text-neon-cyan">ZERO</span> PARA VOCÊ</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed uppercase font-bold tracking-tight italic">
              Teste o ViraExpress por 7 dias inteiros. <br />
              Se você não criar seus primeiros personagens virais ou se arrepender por QUALQUER motivo, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>
        </section>

        {/* 9. AUTHOR BIO */}
        <section className="py-20 md:py-40 bg-white/5 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="glass-card p-2 rounded-full border-neon-cyan/30 overflow-hidden aspect-square">
                <img src="https://i.pravatar.cc/600?u=expert" className="w-full h-full object-cover rounded-full" alt="Expert" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-neon-cyan text-black px-6 py-4 rounded-2xl font-black italic uppercase tracking-widest transform rotate-6">
                Expert IA
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none italic">QUEM É <br /> <span className="text-neon-cyan">VIRA EXPRESS?</span></h2>
              <p className="text-gray-400 font-bold uppercase italic leading-relaxed">
                Somos uma equipe especializada em engenharia de IA e marketing viral. Já ajudamos mais de 5.000 alunos a criarem conteúdo que realmente converte em lucro, sem precisar aparecer. <br /><br />
                Nossa missão é democratizar a alta produção audiovisual, entregando em 60 segundos o que um editor cobraria R$ 200,00 por vídeo.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-700">© 2026 ViraExpress • Todos os Direitos Reservados</p>
        <div className="pt-4 flex justify-center gap-6 text-[9px] font-bold text-gray-800 uppercase tracking-widest">
          <a href="#" className="hover:text-neon-cyan transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Termos</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Contato</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
