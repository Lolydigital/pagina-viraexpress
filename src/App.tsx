import React from 'react';
import {
  Check, Play,
  Target, Video,
  Zap, DollarSign, Brain, Smartphone,
  Clock, Rocket, ShieldCheck
} from 'lucide-react';

// --- MASCOT COMPONENT ---
// A reusable component for the mascot to "break the fourth wall".
const Mascot: React.FC<{
  pose?: 'happy' | 'thinking' | 'pointing' | 'cool' | 'shocked';
  className?: string;
  speech?: string;
}> = ({ pose = 'happy', className = '', speech }) => {
  // Placeholder colors/icons based on pose
  const getMascotContent = () => {
    switch (pose) {
      case 'cool': return <div className="text-6xl">😎</div>; // Placeholder for Cool Carrot
      case 'shocked': return <div className="text-6xl">😱</div>;
      case 'thinking': return <div className="text-6xl">🤔</div>;
      case 'pointing': return <div className="text-6xl">👉</div>;
      default: return <div className="text-6xl">🥕</div>; // Base character
    }
  };

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {speech && (
        <div className="bg-white text-black text-xs md:text-sm font-black uppercase p-3 rounded-2xl border-2 border-black shadow-pop mb-2 relative max-w-[200px] text-center animate-bounce-slow">
          {speech}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-black rotate-45 transform"></div>
        </div>
      )}
      <div className="w-24 h-24 md:w-32 md:h-32 bg-mascot-orange rounded-full border-4 border-black shadow-pop flex items-center justify-center animate-wiggle transform hover:scale-110 transition-transform cursor-pointer">
        {getMascotContent()}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black font-sans selection:bg-mascot-yellow selection:text-black overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-4 overflow-hidden bg-mascot-yellow border-b-4 border-black">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 order-2 md:order-1 text-center md:text-left">
            <div className="inline-block bg-black text-mascot-yellow px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest transform -rotate-2">
              🚀 Método V.O.Z. 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase transform">
              Crie <span className="text-mascot-blue underline decoration-wavy decoration-black">Vídeos Virais</span> de Objetos Falantes em Minutos e <br />
              <span className="bg-black text-white px-2">Fature R$ 17 Mil</span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-black pl-4">
              A <span className="underline decoration-mascot-pink decoration-4">ÚNICA ferramenta</span> que entrega o <strong>ROTEIRO + IMAGENS + PROMPT</strong> prontos, estilo Pixar, baseado no que está viralizando AGORA.
            </p>

            <div className="flex flex-col gap-4">
              <button className="w-full md:w-auto bg-mascot-green text-white border-4 border-black shadow-pop-lg px-8 py-5 rounded-2xl text-xl font-black uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 hover:shadow-pop transition-all flex items-center justify-center gap-3">
                <Play className="fill-current w-6 h-6" /> Quero Criar Agora
              </button>
              <p className="text-xs font-extrabold uppercase tracking-widest text-gray-600 flex items-center justify-center md:justify-start gap-2">
                <Rocket className="w-4 h-4 text-mascot-orange" /> +500 criadores já estão usando
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-mascot-blue rounded-full border-4 border-black flex items-center justify-center font-black text-white text-xl animate-bounce transform rotate-12 z-20">
              WOW!
            </div>
            <Mascot pose="pointing" className="scale-150" speech="Eu faço todo o trabalho chato por você!" />
          </div>
        </div>
      </section>

      {/* 2. QUEBRA DE OBJEÇÕES (GRID) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Video className="w-8 h-8" />, title: "Não Precisa Aparecer", desc: "O objeto é a estrela. Você lucra no anonimato.", bg: "bg-blue-100" },
            { icon: <DollarSign className="w-8 h-8" />, title: "Zero Investimento", desc: "Comece com o plano gratuito. Sem custo inicial.", bg: "bg-green-100" },
            { icon: <Brain className="w-8 h-8" />, title: "Sem Saber IA", desc: "É só clicar. A ferramenta pensa por você.", bg: "bg-purple-100" },
            { icon: <Smartphone className="w-8 h-8" />, title: "Só Celular", desc: "Esqueça PC Gamer. Faz tudo na palma da mão.", bg: "bg-yellow-100" },
            { icon: <Target className="w-8 h-8" />, title: "Sem Seguidores", desc: "Viraliza pelo algoritmo, não pela sua fama.", bg: "bg-red-100" },
            { icon: <Clock className="w-8 h-8" />, title: "Vídeos em 10 min", desc: "Roteiro, imagem e prompt gerados na hora.", bg: "bg-indigo-100" },
            { icon: <Rocket className="w-8 h-8" />, title: "Perfil do Zero", desc: "Faturei R$ 2k com conta criada ontem.", bg: "bg-orange-100" },
            { icon: <Check className="w-8 h-8" />, title: "Método Testado", desc: "O mesmo que eu uso pra fazer R$ 17 mil/mês.", bg: "bg-teal-100" },
            { icon: <Zap className="w-8 h-8" />, title: "FERRAMENTA FAZ", desc: "Outros ensinam. Nós FAZEMOS o trabalho.", bg: "bg-mascot-yellow border-4 border-black shadow-pop" }
          ].map((item, i) => (
            <div key={i} className={`${item.bg} p-6 rounded-3xl border-2 border-black/10 flex flex-col gap-4 relative group hover:-translate-y-1 transition-transform`}>
              <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center shadow-pop-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-black uppercase text-lg mb-1">{item.title}</h3>
                <p className="text-sm font-bold text-gray-600 leading-tight">{item.desc}</p>
              </div>
              {i === 8 && <Mascot pose="cool" className="absolute -top-10 -right-4 scale-50" />}
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROVA SOCIAL */}
      <section className="py-20 bg-black text-white px-4 border-y-4 border-mascot-blue relative overflow-hidden">
        <Mascot pose="happy" className="absolute top-10 right-10 opacity-20 rotate-12 scale-150 grayscale" />
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            Veja Quanto Você Pode <span className="text-mascot-green">Ganhar</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 font-bold uppercase text-xs">Resultados Instagram</span>
                <Smartphone className="text-pink-500 w-5 h-5" />
              </div>
              <div className="text-left space-y-4">
                <div>
                  <p className="text-4xl font-black text-white">R$ 2.266,65</p>
                  <p className="text-xs text-green-400 font-bold uppercase">Em vendas no Link da Bio</p>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-gray-400">
                  <div>👁️ 24.1s Retenção</div>
                  <div>👥 +4.354 Seguidores</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 font-bold uppercase text-xs">Monetização TikTok</span>
                <Video className="text-cyan-400 w-5 h-5" />
              </div>
              <div className="text-left space-y-4">
                <div>
                  <p className="text-4xl font-black text-white">$ 96,00 USD</p>
                  <p className="text-xs text-green-400 font-bold uppercase">Aprox. R$ 540,00 com UM vídeo</p>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-cyan-400"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-gray-400">
                  <div>🎥 Vídeo de 45s</div>
                  <div>📈 10.24% Assistiram tudo</div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block bg-mascot-blue text-white px-8 py-3 rounded-full font-black uppercase text-sm border-2 border-white shadow-[0_0_20px_rgba(0,123,255,0.5)] animate-pulse">
            Te ensino o passo a passo exato disso!
          </div>
        </div>
      </section>

      {/* 4. O QUE VOCÊ VAI RECEBER (BENEFÍCIOS) */}
      <section className="py-20 px-4 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase bg-mascot-yellow inline-block px-4 py-1 transform -rotate-1 border-2 border-black shadow-pop">
            O Que Você Recebe
          </h2>
        </div>

        <div className="space-y-6">
          {[
            { title: "Acesso à Vira Express", desc: "IA Automática: Roteiro + Imagens Pixar + Prompt Veo 3." },
            { title: "Templates Virais Prontos", desc: "Copie e cole estruturas que já têm milhões de views." },
            { title: "Estratégia TikTok & Reels", desc: "O segredo para destravar o algoritmo em 2026." },
            { title: "Tática de Vendas", desc: "Como vender no vídeo sem parecer chato." },
            { title: "Acesso Vitalício", desc: "Pague uma vez, use para sempre. Atualizações grátis." }
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border-2 border-gray-100 hover:border-black transition-colors">
              <div className="bg-mascot-green text-white p-2 rounded-full border-2 border-black shadow-pop-sm">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black uppercase text-lg">{benefit.title}</h4>
                <p className="text-sm font-bold text-gray-500">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BÔNUS EXCLUSIVOS */}
      <section className="py-20 bg-mascot-blue px-4 border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <Mascot pose="shocked" className="absolute -top-16 left-1/2 -translate-x-1/2 z-10" speech="ISSO TUDO É DE GRAÇA?!" />
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] pt-8">
              Bônus <span className="text-mascot-yellow">Exclusivos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔮", title: "Segredo Viral™", color: "bg-purple-500" },
              { icon: "💰", title: "Guia Lucrativo", color: "bg-green-500" },
              { icon: "♾️", title: "Ideias Infinitas IA", color: "bg-indigo-500" },
              { icon: "🧲", title: "Roteiro Magnético", color: "bg-orange-500" },
              { icon: "🤖", title: "Cria Vídeo Sozinho", color: "bg-pink-500" },
              { icon: "🕵️", title: "Edição Invisível", color: "bg-gray-800" },
            ].map((bonus, i) => (
              <div key={i} className={`${bonus.color} text-white p-6 rounded-3xl border-4 border-black shadow-pop hover:-translate-y-2 transition-transform`}>
                <div className="text-4xl mb-4">{bonus.icon}</div>
                <h3 className="text-xl font-black uppercase leading-none mb-2">{bonus.title}</h3>
                <span className="bg-white text-black px-2 py-1 text-[10px] font-black uppercase rounded">Valor: R$ 97 (Grátis)</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
          Crie em menos de <br /> <span className="bg-mascot-orange px-2 text-white transform -rotate-2 inline-block">3 Minutos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border-4 border-gray-100 flex flex-col items-center gap-4">
            <div className="text-6xl font-black text-gray-200">1</div>
            <h3 className="text-2xl font-black uppercase">Escolha</h3>
            <p className="text-sm font-bold text-gray-500">Selecione o nicho e o objeto (cebola, celular...). Baseado em virais reais.</p>
          </div>
          <div className="bg-mascot-yellow p-8 rounded-[2rem] border-4 border-black shadow-pop flex flex-col items-center gap-4 transform md:-translate-y-4">
            <div className="text-6xl font-black text-black/20">2</div>
            <h3 className="text-2xl font-black uppercase">Gere</h3>
            <p className="text-sm font-bold">A ferramenta cria Roteiro + Imagens Pixar + Prompt de Vídeo. Tudo automático.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border-4 border-gray-100 flex flex-col items-center gap-4">
            <div className="text-6xl font-black text-gray-200">3</div>
            <h3 className="text-2xl font-black uppercase">Publique</h3>
            <p className="text-sm font-bold text-gray-500">Gere o vídeo no Veo/Luma, junte no CapCut e poste. Repita e lucre.</p>
          </div>
        </div>
      </section>

      {/* 8. PREÇO E GARANTIA (BLOCK 7+8 combined style) */}
      <section id="pricing" className="py-20 bg-mascot-purple px-4 border-t-4 border-black text-center">
        <div className="max-w-xl mx-auto bg-white rounded-[3rem] border-4 border-black shadow-pop-lg p-8 md:p-12 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-mascot-pink text-white px-6 py-2 rounded-full font-black uppercase border-2 border-black shadow-pop-sm whitespace-nowrap">
            +7 Produtos em 1
          </div>

          <div className="space-y-6 mb-8 mt-4">
            <div className="flex justify-center flex-wrap gap-2">
              {['Curso Completo', 'Ferramenta IA', '6 Bônus Exclusivos'].map(tag => (
                <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold uppercase text-gray-600">{tag}</span>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-bold uppercase line-through text-lg">De R$ 197,00</span>
              <span className="text-sm font-black uppercase tracking-widest text-mascot-purple">Por Apenas</span>
              <div className="text-6xl md:text-8xl font-black text-black tracking-tighter">
                <span className="text-2xl align-top">R$</span>67
              </div>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-lg font-black uppercase text-xs mt-2">À Vista ou 12x de R$ 6,70</span>
            </div>
          </div>

          <button className="w-full bg-mascot-green text-white border-4 border-black shadow-pop px-4 py-6 rounded-2xl text-xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all mb-6">
            Quero Criar Agora
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
            <ShieldCheck className="w-4 h-4" /> Compra 100% Segura • Acesso Vitalício
          </div>
        </div>

        {/* GARANTIA */}
        <div className="max-w-2xl mx-auto mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 flex flex-col md:flex-row items-center gap-6 text-white text-left">
          <div className="w-20 h-20 bg-mascot-blue rounded-full border-4 border-white flex items-center justify-center text-4xl shadow-pop">
            🛡️
          </div>
          <div>
            <h3 className="font-black uppercase text-xl mb-2">Garantia de 7 Dias</h3>
            <p className="font-bold text-sm opacity-90">Se você não criar seu primeiro vídeo viral em 7 dias, eu devolvo 100% do seu dinheiro. Sem risco.</p>
          </div>
        </div>
      </section>

      {/* 9. AUTHOR BIO */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-200 rounded-full border-4 border-black shadow-pop overflow-hidden flex-shrink-0">
            <img src="https://i.pravatar.cc/300?u=mentor" alt="Mentora" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-black uppercase">Quem é sua <span className="text-mascot-blue">Mentora</span></h2>
            <p className="text-gray-700 font-bold leading-relaxed">
              Opa, sou eu! 👋 Assim como você, perdi dias tentando configurar IAs complexas. Cansei de erro 404 e criei a <span className="font-black bg-mascot-yellow px-1">Vira Express</span> para automatizar o que era chato.
              <br /><br />
              Hoje minha ferramenta gera em <strong>1 minuto</strong> o que levava dias. Meu foco é fazer você faturar, não virar programador.
            </p>
            <Mascot pose="happy" className="scale-75 origin-left" speech="Ela manja muito!" />
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-10 bg-black text-white text-center border-t-8 border-mascot-orange">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="flex justify-center gap-6 font-bold text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Suporte</a>
          </div>
          <p className="text-xs font-bold text-gray-700">© 2026 Vira Express. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
