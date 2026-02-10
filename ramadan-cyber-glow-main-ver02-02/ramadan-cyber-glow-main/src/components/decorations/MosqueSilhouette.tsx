interface MosqueSilhouetteProps {
  className?: string;
}

const MosqueSilhouette = ({ className = "" }: MosqueSilhouetteProps) => {
  return (
    <div className={`absolute bottom-0 left-0 right-0 pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="mosqueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>

        {/* Main mosque silhouette */}
        <path
          d="M 0 200 
             L 0 180 
             L 50 180 
             L 50 140 
             L 60 140 
             L 60 120 
             L 80 120 
             L 80 140 
             L 90 140 
             L 90 180 
             
             L 150 180
             L 150 100
             Q 170 60 190 100
             L 190 180
             
             L 250 180
             L 250 150
             L 260 150
             L 270 90
             L 280 150
             L 290 150
             L 290 180
             
             L 400 180
             L 400 120
             L 410 120
             L 410 80
             Q 450 30 490 80
             L 490 120
             L 500 120
             L 500 180
             
             L 580 180
             L 580 130
             Q 600 90 620 130
             L 620 180
             
             L 680 180
             L 680 60
             L 695 60
             Q 720 10 745 60
             L 760 60
             L 760 180
             
             L 820 180
             L 820 110
             L 830 110
             L 840 70
             L 850 110
             L 860 110
             L 860 180
             
             L 940 180
             L 940 90
             Q 980 40 1020 90
             L 1020 180
             
             L 1100 180
             L 1100 140
             L 1110 140
             L 1110 100
             Q 1130 60 1150 100
             L 1150 140
             L 1160 140
             L 1160 180
             
             L 1220 180
             L 1220 130
             L 1240 80
             L 1260 130
             L 1260 180
             
             L 1320 180
             L 1320 160
             L 1330 160
             L 1330 140
             Q 1350 110 1370 140
             L 1370 160
             L 1380 160
             L 1380 180
             
             L 1440 180
             L 1440 200
             Z"
          fill="url(#mosqueGradient)"
        />
        
        {/* Decorative minarets */}
        <circle cx="270" cy="85" r="4" fill="hsl(var(--primary))" opacity="0.6" />
        <circle cx="720" cy="5" r="5" fill="hsl(var(--primary))" opacity="0.8" />
        <circle cx="840" cy="65" r="3" fill="hsl(var(--primary))" opacity="0.5" />
        <circle cx="1240" cy="75" r="3" fill="hsl(var(--primary))" opacity="0.5" />
      </svg>
    </div>
  );
};

export default MosqueSilhouette;
