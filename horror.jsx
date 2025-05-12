import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ghost, Skull, Moon } from "lucide-react";

const pages = ["Home", "Stories", "Videos", "Downloads", "About", "Contact", "Submit"];

const HorrorWebsite = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="p-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Ghost className="text-red-600" />
          DarkRealm
        </h1>
        <nav className="space-x-4">
          {pages.map((page) => (
            <Button key={page} variant="ghost" className="text-white hover:text-red-500">
              {page}
            </Button>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-5xl font-extrabold mb-4 animate-pulse">Welcome to the Fear</h2>
        <p className="text-gray-400 text-xl mb-8">Dive into modern horror experiences in 3D</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg">
          Explore Now
        </Button>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <Card className="bg-gray-900 border border-red-800">
          <CardContent className="p-6 text-center">
            <Skull className="w-12 h-12 mx-auto text-red-500" />
            <h3 className="text-xl font-semibold mt-4">Terrifying Tales</h3>
            <p className="text-gray-400 mt-2">Original horror stories to keep you up all night.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border border-red-800">
          <CardContent className="p-6 text-center">
            <Moon className="w-12 h-12 mx-auto text-red-500" />
            <h3 className="text-xl font-semibold mt-4">3D Experiences</h3>
            <p className="text-gray-400 mt-2">Immersive horror visuals like never before.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border border-red-800">
          <CardContent className="p-6 text-center">
            <Ghost className="w-12 h-12 mx-auto text-red-500" />
            <h3 className="text-xl font-semibold mt-4">User Stories</h3>
            <p className="text-gray-400 mt-2">Share or read real-life horror encounters.</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-600 text-center py-6 border-t border-gray-700">
        &copy; 2025 DarkRealm Horror. All rights reserved.
      </footer>
    </div>
  );
};

export default HorrorWebsite;
