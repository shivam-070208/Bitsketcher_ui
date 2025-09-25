
// const imageUrls = [
//   "https://imgs.search.brave.com/4O_L1eGJ2-VPoMpz81grJzeh8-k46qorV87ZyFJhVdA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9waW5r/LWZsb3dlcnMtZ2xh/c3MtdmFzZS13YXRl/cnktc3VyZmFjZS1i/ZWF1dGlmdWwtYXJy/YW5nZW1lbnQtcmVz/dGluZy1zb2Z0LWxp/Z2h0aW5nLWNyZWF0/aW5nLXBlYWNlZnVs/LWRyZWFteS0zNjc1/ODM2MTIuanBn",
//   "https://imgs.search.brave.com/ab6mPdSlzGKp2QQ6i3CuL4DNhx1sPkHrMLOYQ83jagc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFsdHd0WUFGLUwu/anBn",
//   "https://imgs.search.brave.com/kVmU2jA09drR4XqOwkt4ARFvT4-QrZcI6JIOKzExeFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/ODk4ODYzMS9waG90/by9saWdodC1ibHVl/LXdhdGVyeS1sb3Rp/b24tc21lYXJzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1m/OUZYcVBwQkh3Qjlt/ZzZQTGlIQVM2bWlx/Z0JxMGJxdDRKdXRz/Tmh4ZW1vPQ"

import MorphingText from "@/components/bitsketcher_ui/Text/MorphingText";
import SplitWavyText from "@/components/bitsketcher_ui/Text/SplitWavyText";

  
// ];

export default function Home() {
  return (
    <div className="grid place-items-center w-screen gap-2 p-10">
    <SplitWavyText text="Sketcher" waveAmplitude={30} delay={0.2} cn="px-6 Inter text-9xl uppercase " />
    <MorphingText Text="Shivam" Scalefactor={3.0} EffectLength={150}  className="Inter text-9xl w-fit " />
    </div>
  );
}
