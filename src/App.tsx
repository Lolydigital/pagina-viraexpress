import React, { useState, useEffect } from 'react';
import {
  Zap, Check, Play, Users,
  MessageSquare, TrendingUp, Trophy, ArrowRight,
  ShieldCheck, HelpCircle, ShoppingBag,
  Scale, Smartphone, Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown
  const [activeTab, setActiveTab] = useState<'shopee' | 'pro' | 'universal'>('universal');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. SCARCITY BAR */}
      <div className="bg-indigo-600 py-2.5 px-4 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] sticky top-0 z-[100] shadow-xl">
        ⚡ OFERTA DE LANÇAMENTO: ESTE VALOR ENCERRA EM <span className="underline decoration-2 underline-offset-4 decoration-emerald-400">{formatTime(timeLeft)}</span>
      </div>

      <main className="relative pt-20 pb-40 overflow-hidden">
        {/* BACKGROUND GLOWS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full -z-10"></div>
        <div className="absolute top-[1000px] right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full -z-10"></div>

        {/* 2. HERO SECTION (HEADLINE & SUB) */}
        <section className="max-w-7xl mx-auto px-8 space-y-12 text-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
              Transforme Objetos em Vendas
            </span>
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase gradient-text py-4">
              Viralize Sem <br /> <span className="text-white">Aparecer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-xl font-medium leading-relaxed uppercase tracking-tighter">
              A ferramenta secreta usada por grandes players para criar <span className="text-indigo-400">Objetos Falantes</span> que dominam o algoritmo do TikTok e Instagram.
            </p>
          </motion.div>

          {/* 3. HERO CALL TO ACTION & MOCKUP PREVIEW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto pt-10"
          >
            <div className="absolute inset-0 bg-indigo-600/5 blur-3xl -z-10"></div>
            <div className="glass-card rounded-[3rem] p-4 md:p-8 relative group overflow-hidden border-indigo-500/20 shadow-2xl">
              <div className="aspect-video bg-black/40 rounded-[2rem] flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all cursor-pointer">
                    <Play className="w-10 h-10 fill-white ml-2 text-white" />
                  </div>
                </div>
                {/* VIDEO PLACEHOLDER */}
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=675&fit=crop"
                  className="w-full h-full object-cover rounded-[2rem] opacity-40 group-hover:opacity-60 transition-opacity"
                  alt="Product Preview"
                />
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-12">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 md:px-20 py-6 md:py-8 rounded-full text-sm md:text-xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl shadow-indigo-600/40 active:scale-95 flex items-center gap-6 mx-auto group">
                Quero Destravar Agora <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
              <p className="pt-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Acesso imediato e 100% seguro
              </p>
            </div>
          </motion.div>
        </section>

        {/* 4. THE PROBLEM & AGITATION */}
        <section className="py-20 md:py-32 bg-white/5 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">O Grande Obstáculo</span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                Por que seus vídeos <br /> <span className="text-indigo-400/50">não engajam?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Você gasta horas editando, tenta todas as músicas de "tendência" e o resultado é sempre o mesmo: <span className="text-white font-bold">o vácuo.</span> <br /><br />
                O público está cansado de anúncios genéricos e artes estáticas do Canva. Se você não prender a atenção em 2 segundos, você é ignorado.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="glass-card p-6 rounded-3xl border-red-500/20 bg-red-500/5">
                  <p className="text-[11px] font-black uppercase text-red-400 mb-2">Problema #1</p>
                  <p className="text-xs font-bold text-white/80 leading-relaxed uppercase">Artes estáticas não causam desejo de compra em 2026.</p>
                </div>
                <div className="glass-card p-6 rounded-3xl border-red-500/20 bg-red-500/5">
                  <p className="text-[11px] font-black uppercase text-red-400 mb-2">Problema #2</p>
                  <p className="text-xs font-bold text-white/80 leading-relaxed uppercase">O custo de um editor profissional inviabiliza o lucro.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-2 rounded-[3.5rem] border-white/10 shadow-2xl shadow-indigo-600/10">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=1000&fit=crop"
                  className="rounded-[3rem] w-full"
                  alt="Problem visualization"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXPERT PROOF & MOCKUPS */}
        <section className="py-20 md:py-40 max-w-7xl mx-auto px-8 text-center space-y-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Provado por quem <br /> <span className="text-indigo-400">Sabe Fazer</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs italic">Resultados reais de quem usa o ViraExpress</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* INSTAGRAM MOCKUPS */}
            {[
              { label: 'Nichos Viralizados', val: '15+', icon: <TrendingUp /> },
              { label: 'Alcance Médio', val: '2.4M', icon: <Users /> },
              { label: 'Vendas Diretas', val: 'R$ 15k+', icon: <Trophy /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[3rem] space-y-4 border-indigo-500/10 bg-indigo-500/5"
              >
                <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto text-indigo-400">
                  {stat.icon}
                </div>
                <p className="text-5xl font-black italic tracking-tighter">{stat.val}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. SEGMENTED COMMUNICATION (UNIVERSAL / SHOPEE / PRO) */}
        <section className="py-32 bg-white/2 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-8 space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">O Caminho do Seu <span className="text-indigo-400">Sucesso</span></h2>
                <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Selecione seu perfil e veja como vamos te ajudar</p>
              </div>
              <div className="flex bg-black/40 p-2 rounded-2xl border border-white/5 gap-2">
                <button onClick={() => setActiveTab('universal')} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'universal' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-white'}`}>Geral</button>
                <button onClick={() => setActiveTab('shopee')} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'shopee' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-white'}`}>Afiliados</button>
                <button onClick={() => setActiveTab('pro')} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'pro' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-white'}`}>Expert</button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  {activeTab === 'shopee' && (
                    <>
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400"><ShoppingBag /></div>
                      <h3 className="text-3xl md:text-5xl font-black italic uppercase italic tracking-tighter">Método Shopee Viral</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">Transforme os 'achadinhos' estáticos em personagens Pixar que vendem por você 24h por dia. O segredo dos Top Afiliados.</p>
                      <ul className="space-y-4 pt-4">
                        <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-emerald-400"><Check className="w-5 h-5" /> Criativos Impossíveis de Ignorar</li>
                        <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-emerald-400"><Check className="w-5 h-5" /> Fim do Bloqueio Criativo</li>
                      </ul>
                    </>
                  )}
                  {activeTab === 'pro' && (
                    <>
                      <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400"><Scale /></div>
                      <h3 className="text-3xl md:text-5xl font-black italic uppercase italic tracking-tighter">Autoridade sem Câmera</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">Ideal para Advogados, Nutris e Médicos. Deixe que o 'Objeto de Desejo' fale sobre o problema do seu cliente com autoridade.</p>
                      <ul className="space-y-4 pt-4">
                        <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-purple-400"><Check className="w-5 h-5" /> Posicionamento de Referência</li>
                        <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-purple-400"><Check className="w-5 h-5" /> Conteúdo Infinito e Autoral</li>
                      </ul>
                    </>
                  )}
                  {activeTab === 'universal' && (
                    <>
                      <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400"><Zap /></div>
                      <h3 className="text-3xl md:text-5xl font-black italic uppercase italic tracking-tighter">Gere Vendas com IA</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">A ferramenta completa para quem quer criar conteúdo viciante para qualquer nicho, do zero ao viral em 60 segundos.</p>
                      <ul className="space-y-4 pt-4">
                        <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-indigo-400"><Check className="w-5 h-5" /> Roteiros Psicológicos de Alta Retenção</li>
                        <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-indigo-400"><Check className="w-5 h-5" /> Estética Pixar 3D (8K Ultra High)</li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="relative">
                  <div className="glass-card p-2 rounded-[4rem] border-white/10 rotate-3 shadow-2xl">
                    <img
                      src={activeTab === 'shopee' ? "https://images.unsplash.com/photo-1542291026-7eec264c2741?w=800" : activeTab === 'pro' ? "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800" : "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800"}
                      className="rounded-[3.8rem] w-full"
                      alt="Segment visualization"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 7. THE SOLUTION: STEP BY STEP */}
        <section className="py-32 max-w-7xl mx-auto px-8 text-center space-y-20">
          <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            A Simplicidade que <br /> <span className="text-indigo-400">Gera Lucro</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Nicho por Voz', desc: 'Fale seu nicho e a IA entende seu mercado na hora.', icon: <Smartphone /> },
              { step: '02', title: 'IA Storytelling', desc: 'Roteiros agressivos que prendem o público até o CTA.', icon: <MessageSquare /> },
              { step: '03', title: '3D Pixar Master', desc: 'Geração automática de personagens com alma.', icon: <Laptop /> },
              { step: '04', title: 'Viral Score', desc: 'O sistema valida se seu vídeo é viral antes de postar.', icon: <TrendingUp /> }
            ].map((step, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-24 h-24 bg-white/5 border border-white/5 rounded-[2rem] flex items-center justify-center mx-auto text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xl text-3xl">
                  {step.step}
                </div>
                <h4 className="text-[13px] font-black uppercase tracking-widest leading-none">{step.title}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. PRICE ANCHORING & BONUSES */}
        <section id="pricing" className="py-20 md:py-40 bg-indigo-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="glass-card bg-black/40 border-white/20 rounded-[4rem] p-10 md:p-20 flex flex-col items-center text-center space-y-12">
              <div className="space-y-4">
                <span className="bg-white/10 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase italic">OFERTA DE LANÇAMENTO</span>
                <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">Pare de Perder seu <br /> <span className="opacity-40">Tempo Vital</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
                  <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Bônus #01</p>
                  <h4 className="text-xl font-black italic uppercase tracking-tighter">Curso Montagem Express</h4>
                  <p className="text-xs font-medium text-white/60 uppercase italic"><s>R$ 197,00</s> FREE</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
                  <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Bônus #02</p>
                  <h4 className="text-xl font-black italic uppercase tracking-tighter">Biblioteca de Nichos</h4>
                  <p className="text-xs font-medium text-white/60 uppercase italic"><s>R$ 47,00</s> FREE</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
                  <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Bônus #03</p>
                  <h4 className="text-xl font-black italic uppercase tracking-tighter">Suporte VIP</h4>
                  <p className="text-xs font-medium text-white/60 uppercase italic"><s>R$ 97,00</s> FREE</p>
                </div>
              </div>

              <div className="pt-10 flex flex-col items-center space-y-4">
                <p className="text-xl md:text-2xl font-black uppercase tracking-widest opacity-40 italic"><s>POR R$ 297,00</s></p>
                <div className="flex items-baseline gap-4">
                  <span className="text-xs md:text-2xl font-black uppercase italic tracking-widest">POR APENAS 12x</span>
                  <span className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-none">R$ 4,<span className="text-emerald-400">71</span></span>
                </div>
                <p className="text-2xl font-black uppercase tracking-widest opacity-60 italic">OU R$ 47,00 À VISTA</p>
              </div>

              <button className="w-full max-w-2xl bg-white text-indigo-600 py-8 md:py-10 rounded-full text-sm md:text-2xl font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-6 group">
                Quero meu Acesso Agora <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/cartao-visa-logo-5.png" alt="Visa" className="h-4 brightness-0 invert" />
                <img src="https://logodownload.org/wp-content/uploads/2014/10/mastercard-logo-2.png" alt="Mastercard" className="h-6 brightness-0 invert" />
                <img src="https://logodownload.org/wp-content/uploads/2021/04/pix-logo-4.png" alt="PIX" className="h-6 brightness-0 invert" />
              </div>
            </div>
          </div>
        </section>

        {/* 9. GUARANTEE */}
        <section className="py-20 md:py-40 text-center space-y-12">
          <div className="w-32 h-32 md:w-56 md:h-56 mx-auto relative">
            <div className="absolute inset-0 bg-indigo-600/20 blur-2xl animate-pulse"></div>
            <ShieldCheck className="w-full h-full text-indigo-500 relative z-10" />
          </div>
          <div className="max-w-3xl mx-auto px-8 space-y-6">
            <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter">Sua Satisfação <br /> <span className="text-indigo-400">é a Nossa Meta</span></h2>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed uppercase font-bold tracking-tight italic">
              Teste o ViraExpress por 7 dias inteiros. <br />
              Se por qualquer motivo você não se apaixonar pela ferramenta, devolvemos 100% do seu dinheiro sem perguntas. Você não assume risco nenhum.
            </p>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="py-20 md:py-40 max-w-4xl mx-auto px-8 space-y-16">
          <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter text-center">Ficou com <span className="text-indigo-400">Alguma Dúvida?</span></h2>
          <div className="space-y-6">
            {[
              { q: "Preciso baixar algum programa?", a: "Absolutamente nada. O ViraExpress é 100% online e funciona direto no seu navegador ou celular." },
              { q: "Preciso saber editar vídeos?", a: "Não. Nós te entregamos o roteiro pronto, a imagem Pixar pronta e a estratégia. Você só junta tudo no CapCut com o bônus de treinamento que te demos." },
              { q: "Como recebo meu acesso?", a: "Assim que o pagamento for aprovado, os dados de acesso chegam no seu e-mail em menos de 2 minutos." },
              { q: "Realmente funciona para nicho Shopee?", a: "É o nicho que mais cresce hoje. O ViraExpress foi construído pensando na retenção máxima para afiliados." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border-white/5 space-y-4">
                <div className="flex items-center gap-4 text-indigo-400 font-black uppercase text-xs tracking-widest"><HelpCircle className="w-5 h-5" /> {faq.q}</div>
                <p className="text-gray-400 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center px-8">
        <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-700">© 2026 ViraExpress • Todos os Direitos Reservados</p>
        <div className="pt-6 flex justify-center gap-8 text-[10px] font-bold text-gray-800 uppercase tracking-widest">
          <a href="#" className="hover:text-indigo-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Privacidade</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
