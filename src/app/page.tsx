
import WaveCard from "@/components/bitsketcher_ui/Crads/WaveCard";
import dynamic from "next/dynamic";



const imageUrls = [
  "https://imgs.search.brave.com/4O_L1eGJ2-VPoMpz81grJzeh8-k46qorV87ZyFJhVdA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9waW5r/LWZsb3dlcnMtZ2xh/c3MtdmFzZS13YXRl/cnktc3VyZmFjZS1i/ZWF1dGlmdWwtYXJy/YW5nZW1lbnQtcmVz/dGluZy1zb2Z0LWxp/Z2h0aW5nLWNyZWF0/aW5nLXBlYWNlZnVs/LWRyZWFteS0zNjc1/ODM2MTIuanBn",
  "https://imgs.search.brave.com/ab6mPdSlzGKp2QQ6i3CuL4DNhx1sPkHrMLOYQ83jagc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFsdHd0WUFGLUwu/anBn",
  "https://imgs.search.brave.com/kVmU2jA09drR4XqOwkt4ARFvT4-QrZcI6JIOKzExeFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/ODk4ODYzMS9waG90/by9saWdodC1ibHVl/LXdhdGVyeS1sb3Rp/b24tc21lYXJzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1m/OUZYcVBwQkh3Qjlt/ZzZQTGlIQVM2bWlx/Z0JxMGJxdDRKdXRz/Tmh4ZW1vPQ"

  
];

export default function Home() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3  w-screen gap-2 p-10">
      {imageUrls.map((url, index) => (
        <div key={index} className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg ">
          <WaveCard speed={3.0} imageUrl={url} scale={1.3} waves={1.0} />
        </div>
      ))}
    </div>
  );
}
