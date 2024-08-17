import { footerData } from "../../seed/footerData";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {footerData?.map((item, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold mb-4">{item?.title}</h2>
              <ul className="space-y-2">
                {item?.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex} className="text-sm">
                    {subLink}
                  </li>
                ))}
              </ul>
              {index === footerData.length - 1 && (
                <address className="mt-5 not-italic">
                  <h2 className="text-xl font-bold mb-2">Contact us</h2>
                  <p>
                    <a href="mailto:info@abstract.com" className="hover:underline">
                      info@abstract.com
                    </a>
                  </p>
                </address>
              )}
            </div>
          ))}
          <div className="flex flex-col items-center md:items-start pt-52">
            <img src="/footerLogo.svg" alt="Footer Logo" className="w-36 mb-5" />
            <small className="text-sm font-semibold text-center md:text-left">
              &copy; 2022 Abstract Studio Design, Inc. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
