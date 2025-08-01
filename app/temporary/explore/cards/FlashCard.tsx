import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AudioLines } from "lucide-react";

export default function FlashCard({ data }: { data: any }) {
  return (
    <Card className="bg-white text-black shadow-none rounded-2xl border transition-colors cursor-pointer-custom group">
      <CardContent className="p-3">
        <div className="relative border border-gray-300 rounded-2xl overflow-hidden mb-2 group">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-[3/2] object-cover"
          />
          <Button className="absolute bottom-3 right-3 w-12 h-12 shrink-0 flex md:hidden md:group-hover:flex items-center justify-center ease-in duration-500 bg-white text-black border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            <AudioLines className="!size-8" />
          </Button>
        </div>
        <div className="relative py-2">
          <h3 className="font-semibold text-lg truncate">{data.title}</h3>
          <p className="text-base truncate">{data.description}</p>
          <p className="text-gray-700 text-xs mt-1 truncate flex items-center gap-1">
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Ai agent</title>
              <g
                id="页面-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Media"
                  transform="translate(-960.000000, -96.000000)"
                  fillRule="nonzero"
                >
                  <g
                    id="voice_line"
                    transform="translate(960.000000, 96.000000)"
                  >
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute"
                      fillRule="nonzero"
                    ></path>
                    <path
                      d="M12,3 C12.51285,3 12.9355092,3.38604429 12.9932725,3.88337975 L13,4 L13,20 C13,20.5523 12.5523,21 12,21 C11.48715,21 11.0644908,20.613973 11.0067275,20.1166239 L11,20 L11,4 C11,3.44772 11.4477,3 12,3 Z M8,6 C8.55228,6 9,6.44772 9,7 L9,17 C9,17.5523 8.55228,18 8,18 C7.44772,18 7,17.5523 7,17 L7,7 C7,6.44772 7.44772,6 8,6 Z M16,6 C16.5523,6 17,6.44772 17,7 L17,17 C17,17.5523 16.5523,18 16,18 C15.4477,18 15,17.5523 15,17 L15,7 C15,6.44772 15.4477,6 16,6 Z M4,9 C4.55228,9 5,9.44772 5,10 L5,14 C5,14.5523 4.55228,15 4,15 C3.44772,15 3,14.5523 3,14 L3,10 C3,9.44772 3.44772,9 4,9 Z M20,9 C20.51285,9 20.9355092,9.38604429 20.9932725,9.88337975 L21,10 L21,14 C21,14.5523 20.5523,15 20,15 C19.48715,15 19.0644908,14.613973 19.0067275,14.1166239 L19,14 L19,10 C19,9.44772 19.4477,9 20,9 Z"
                      id="形状"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Ai-generated
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
