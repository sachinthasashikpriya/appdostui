import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">AppDost</div>
          <div className="text-sm text-gray-600 mt-2">Complete IT Solution • HQ Patna</div>
        </div>
        <div>
          <div className="font-semibold">Quick links</div>
          <ul className="mt-2 text-sm text-gray-600">
            <li>Services</li>
            <li>Projects</li>
            <li>Careers</li>
          </ul>
        </div>
        <div id="contact">
          <div className="font-semibold">Contact</div>
          <div className="text-sm text-gray-600 mt-2">contact@appdost.in</div>
          <div className="text-sm text-gray-600">+91 76350 75422</div>
        </div>
      </div>
      <div className="bg-gray-50 py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} AppDost — Built with ❤️</div>
    </footer>
  );
}
