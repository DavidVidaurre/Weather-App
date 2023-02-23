export const SoonIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 3 40 40'>
      <defs>
        <linearGradient id='a' x1='16.5' y1='19.67' x2='21.5' y2='28.33' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#FDC473' />
          <stop offset='0.45' stopColor='#FDC473' />
          <stop offset='1' stopColor='#FFA257' />
        </linearGradient>
      </defs>
      <circle cx='19' cy='24' r='5' stroke='#f8af18' strokeMiterlimit='10' strokeWidth='0.5' fill='#FDC473' />
      <path d='M19,15.67V12.5m0,23V32.33m5.89-14.22,2.24-2.24M10.87,32.13l2.24-2.24m0-11.78-2.24-2.24M27.13,32.13l-2.24-2.24M7.5,24h3.17M30.5,24H27.33' fill='none' stroke='#fbbf24' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2'>
        <animateTransform attributeName='transform' type='rotate' values='0 19 24; 360 19 24' dur='45s' repeatCount='indefinite' />
      </path>
    </svg>
  )
}

export const MoonIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 3 40 40'>
      <defs>
        <linearGradient id='a' x1='13.58' y1='15.57' x2='24.15' y2='33.87' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#86C3DB' />
          <stop offset='0.45' stopColor='#86C3DB' />
          <stop offset='1' stopColor='#5EAFCF' />
        </linearGradient>
      </defs>
      <g>
        <path d='M29.33,26.68A10.61,10.61,0,0,1,18.65,16.14,10.5,10.5,0,0,1,19,13.5,10.54,10.54,0,1,0,30.5,26.61,11.48,11.48,0,0,1,29.33,26.68Z' stroke='#72b9d5' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.5' fill='#86C3DB' />
        <animateTransform attributeName='transform' type='rotate' values='-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293' dur='10s' repeatCount='indefinite' />
      </g>
    </svg>
  )
}

export const IsSoonOrMoon = ({ isDarkMode }) => {
  return (
    isDarkMode
      ? (
        <g>
          <path d='M29.33,26.68A10.61,10.61,0,0,1,18.65,16.14,10.5,10.5,0,0,1,19,13.5,10.54,10.54,0,1,0,30.5,26.61,11.48,11.48,0,0,1,29.33,26.68Z' stroke='#72b9d5' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.5' fill='url(#a)' />
          <animateTransform attributeName='transform' type='rotate' values='-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293' dur='10s' repeatCount='indefinite' />
        </g>
        )
      : (
        <>
          <circle cx='19' cy='24' r='5' stroke='#f8af18' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#a)' />
          <path d='M19,15.67V12.5m0,23V32.33m5.89-14.22,2.24-2.24M10.87,32.13l2.24-2.24m0-11.78-2.24-2.24M27.13,32.13l-2.24-2.24M7.5,24h3.17M30.5,24H27.33' fill='none' stroke='#fbbf24' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2'>
            <animateTransform attributeName='transform' type='rotate' values='0 19 24; 360 19 24' dur='45s' repeatCount='indefinite' />
          </path>
        </>
        )
  )
}

export const GradientColor = ({ isDarkMode }) => {
  return (
    <linearGradient id='a' x1={!isDarkMode ? '16.5' : '13.58'} y1={!isDarkMode ? '19.67' : '15.57'} x2={!isDarkMode ? '21.5' : '24.15'} y2={!isDarkMode ? '28.33' : '33.87'} gradientUnits='userSpaceOnUse'>
      <stop offset='0' stopColor={!isDarkMode ? '#FDC473' : '#86C3DB'} />
      <stop offset='0.45' stopColor={!isDarkMode ? '#FDC473' : '#86C3DB'} />
      <stop offset='1' stopColor={!isDarkMode ? '#FFA257' : '#5EAFCF'} />
      {
        isDarkMode && (
          <animateTransform attributeName='gradientTransform' type='rotate' values='10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293' dur='10s' repeatCount='indefinite' />
        )
      }
    </linearGradient>
  )
}

export const SatelliteIcon = ({ isDarkMode }) => {
  return (
    <svg className='background-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <linearGradient id='a' x1='23.25' y1='16.84' x2='40.75' y2='47.16' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor={!isDarkMode ? '#FDC473' : '#86C3DB'} />
          <stop offset='0.45' stopColor={!isDarkMode ? '#FDC473' : '#86C3DB'} />
          <stop offset='1' stopColor={!isDarkMode ? '#FFA257' : '#5EAFCF'} />
        </linearGradient>
      </defs>
      <circle cx='32' cy='32' r='17.5' stroke={!isDarkMode ? '#FDC473' : '#86C3DB'} strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.5' fill='url(#a)' />
    </svg>
  )
}

export const ClearSkyIcon = ({ isDarkMode }) => {
  return (
    isDarkMode
      ? (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
          <defs>
            <linearGradient id='a' x1='21.92' y1='18.75' x2='38.52' y2='47.52' gradientUnits='userSpaceOnUse'>
              <stop offset='0' stopColor='#86c3db' />
              <stop offset='0.45' stopColor='#86c3db' />
              <stop offset='1' stopColor='#5eafcf' />
              <animateTransform attributeName='gradientTransform' type='rotate' values='5 32 32; -15 32 32; 5 32 32' dur='10s' repeatCount='indefinite' />
            </linearGradient>
          </defs>
          <path d='M46.66,36.2A16.66,16.66,0,0,1,29.88,19.65a16.29,16.29,0,0,1,.55-4.15A16.56,16.56,0,1,0,48.5,36.1C47.89,36.16,47.28,36.2,46.66,36.2Z' stroke='#72b9d5' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.5' fill='url(#a)'>
            <animateTransform attributeName='transform' type='rotate' values='-5 32 32; 15 32 32; -5 32 32' dur='10s' repeatCount='indefinite' />
          </path>
        </svg>
        )
      : (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
          <defs>
            <linearGradient id='a' x1='26.75' y1='22.91' x2='37.25' y2='41.09' gradientUnits='userSpaceOnUse'>
              <stop offset='0' stopColor='#fbbf24' />
              <stop offset='0.45' stopColor='#fbbf24' />
              <stop offset='1' stopColor='#f59e0b' />
            </linearGradient>
          </defs>
          <circle cx='32' cy='32' r='10.5' stroke='#f8af18' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#a)' />
          <path d='M32,15.71V9.5m0,45V48.29M43.52,20.48l4.39-4.39M16.09,47.91l4.39-4.39m0-23-4.39-4.39M47.91,47.91l-4.39-4.39M15.71,32H9.5m45,0H48.29' fill='none' stroke='#fbbf24' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3'>
            <animateTransform attributeName='transform' dur='45s' values='0 32 32; 360 32 32' repeatCount='indefinite' type='rotate' />
          </path>
        </svg>
        )
  )
}

export const OvercastIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='40.76' y1='23' x2='50.83' y2='40.46' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#9ca3af' />
          <stop offset='0.45' stopColor='#9ca3af' />
          <stop offset='1' stopColor='#6b7280' />
        </linearGradient>
        <linearGradient id='c' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M34.23,33.45a4.05,4.05,0,0,0,4.05,4H54.79a4.34,4.34,0,0,0,.81-8.61,3.52,3.52,0,0,0,.06-.66,4.06,4.06,0,0,0-6.13-3.48,6.08,6.08,0,0,0-11.25,3.19,6.34,6.34,0,0,0,.18,1.46h-.18A4.05,4.05,0,0,0,34.23,33.45Z' stroke='#848b98' strokeMiterlimit='10' strokeWidth='0.5' fill='#848b98'>
        <animateTransform attributeName='transform' type='translate' values='-2.1 0; 2.1 0; -2.1 0' dur='7s' repeatCount='indefinite' />
      </path>
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='#e6effc'>
        <animateTransform attributeName='transform' type='translate' values='-3 0; 3 0; -3 0' dur='7s' repeatCount='indefinite' />
      </path>
    </svg>
  )
}

export const PartyCloudyDrizzleIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='23.31' y1='44.3' x2='24.69' y2='46.7' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='d' x1='30.31' y1='44.3' x2='31.69' y2='46.7' xlinkHref='#c' />
        <linearGradient id='e' x1='37.31' y1='44.3' x2='38.69' y2='46.7' xlinkHref='#c' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <line x1='24.08' y1='45.01' x2='23.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#c)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
      <line x1='31.08' y1='45.01' x2='30.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#d)'>
        <animateTransform attributeName='transform' type='translate' begin='-0.5s' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.5s' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
      <line x1='38.08' y1='45.01' x2='37.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#e)'>
        <animateTransform attributeName='transform' type='translate' begin='-1s' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-1s' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
    </svg>

  )
}

export const PartyCloudyFreezingFogIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='17.94' y1='55.73' x2='26.94' y2='71.32' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#d4d7dd' />
          <stop offset='0.45' stopColor='#d4d7dd' />
          <stop offset='1' stopColor='#bec1c6' />
        </linearGradient>
        <linearGradient id='d' x1='28.81' y1='49.45' x2='37.81' y2='65.04' xlinkHref='#c' />
        <linearGradient id='e' x1='37.06' y1='44.68' x2='46.06' y2='60.27' xlinkHref='#c' />
        <linearGradient id='f' x1='17.94' y1='49.73' x2='26.94' y2='65.32' xlinkHref='#c' />
        <linearGradient id='g' x1='28.81' y1='43.45' x2='37.81' y2='59.04' xlinkHref='#c' />
        <linearGradient id='h' x1='37.06' y1='38.68' x2='46.06' y2='54.27' xlinkHref='#c' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <g>
        <line x1='17' y1='58' x2='21.5' y2='58' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#c)' />
        <line x1='28.5' y1='58' x2='39' y2='58' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' strokeDasharray='7 7' stroke='url(#d)' />
        <line x1='42.5' y1='58' x2='47' y2='58' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#e)' />
        <animateTransform attributeName='transform' type='translate' values='-3 0; 3 0; -3 0' dur='5s' begin='0s' repeatCount='indefinite' />
      </g>
      <g>
        <line x1='17' y1='52' x2='21.5' y2='52' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#f)' />
        <line x1='28.5' y1='52' x2='39' y2='52' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' strokeDasharray='7 7' stroke='url(#g)' />
        <line x1='42.5' y1='52' x2='47' y2='52' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#h)' />
        <animateTransform attributeName='transform' type='translate' values='-3 0; 3 0; -3 0' dur='5s' begin='-4s' repeatCount='indefinite' />
      </g>
      <g>
        <circle cx='31' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='#86c3db' />
        <path d='M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='#86c3db' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='-1 -6; 1 12' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 31 45; 360 31 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' dur='4s' repeatCount='indefinite' />
      </g>
      <g>
        <circle cx='24' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='#86c3db' />
        <path d='M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='#86c3db' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-2s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 24 45; 360 24 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-2s' dur='4s' repeatCount='indefinite' />
      </g>
      <g>
        <circle cx='38' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='#86c3db' />
        <path d='M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='#86c3db' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-1s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 38 45; 360 38 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-1s' dur='4s' repeatCount='indefinite' />
      </g>
    </svg>
  )
}

export const PartyCloudyHaze = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='17.94' y1='55.73' x2='26.94' y2='71.32' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#d4d7dd' />
          <stop offset='0.45' stopColor='#d4d7dd' />
          <stop offset='1' stopColor='#bec1c6' />
        </linearGradient>
        <linearGradient id='d' x1='28.81' y1='49.45' x2='37.81' y2='65.04' xlinkHref='#c' />
        <linearGradient id='e' x1='37.06' y1='44.68' x2='46.06' y2='60.27' xlinkHref='#c' />
        <linearGradient id='f' x1='17.94' y1='49.73' x2='26.94' y2='65.32' xlinkHref='#c' />
        <linearGradient id='g' x1='28.81' y1='43.45' x2='37.81' y2='59.04' xlinkHref='#c' />
        <linearGradient id='h' x1='37.06' y1='38.68' x2='46.06' y2='54.27' xlinkHref='#c' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <g>
        <line x1='17' y1='58' x2='21.5' y2='58' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#c)' />
        <line x1='28.5' y1='58' x2='39' y2='58' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' strokeDasharray='7 7' stroke='url(#d)' />
        <line x1='42.5' y1='58' x2='47' y2='58' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#e)' />
        <animateTransform attributeName='transform' type='translate' values='-3 0; 3 0; -3 0' dur='5s' begin='0s' repeatCount='indefinite' />
      </g>
      <g>
        <line x1='17' y1='52' x2='21.5' y2='52' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#f)' />
        <line x1='28.5' y1='52' x2='39' y2='52' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' strokeDasharray='7 7' stroke='url(#g)' />
        <line x1='42.5' y1='52' x2='47' y2='52' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke='url(#h)' />
        <animateTransform attributeName='transform' type='translate' values='-3 0; 3 0; -3 0' dur='5s' begin='-4s' repeatCount='indefinite' />
      </g>
    </svg>
  )
}

export const PartyCloudyRain = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='22.53' y1='42.95' x2='25.47' y2='48.05' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='d' x1='29.53' y1='42.95' x2='32.47' y2='48.05' xlinkHref='#c' />
        <linearGradient id='e' x1='36.53' y1='42.95' x2='39.47' y2='48.05' xlinkHref='#c' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <line x1='24.39' y1='43.03' x2='23.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#c)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
      <line x1='31.39' y1='43.03' x2='30.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#d)'>
        <animateTransform attributeName='transform' begin='-0.4s' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.4s' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
      <line x1='38.39' y1='43.03' x2='37.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#e)'>
        <animateTransform attributeName='transform' begin='-0.2s' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.2s' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
    </svg>
  )
}

export const PartyCloudyShower = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='22.53' y1='42.95' x2='25.47' y2='48.05' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='d' x1='29.53' y1='42.95' x2='32.47' y2='48.05' xlinkHref='#c' />
        <linearGradient id='e' x1='36.53' y1='42.95' x2='39.47' y2='48.05' xlinkHref='#c' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <line x1='24.39' y1='43.03' x2='23.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#c)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
      <line x1='31.39' y1='43.03' x2='30.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#d)'>
        <animateTransform attributeName='transform' begin='-0.4s' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.4s' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
      <line x1='38.39' y1='43.03' x2='37.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#e)'>
        <animateTransform attributeName='transform' begin='-0.2s' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.2s' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>

      <path d='M73.64,45a5,5,0,1,1,3.61,8.46H41.75' fill='none' strokeDasharray='35 22' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='#d4d7dd' transform='scale(0.7)'>
        <animate attributeName='stroke-dashoffset' values='-57; 57' dur='2.1s' repeatCount='indefinite' />
      </path>
      <path d='M69.14,69a5,5,0,1,0,3.61-8.46h-21' fill='none' strokeDasharray='24 15' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='#bec1c6' transform='scale(0.7)'>
        <animate attributeName='stroke-dashoffset' values='-39; 39' dur='2.1s' begin='-.525s' repeatCount='indefinite' />
      </path>
    </svg>
  )
}

export const PartyCloudySleet = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='23.12' y1='43.48' x2='24.88' y2='46.52' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#86c3db' />
          <stop offset='0.45' stopColor='#86c3db' />
          <stop offset='1' stopColor='#5eafcf' />
        </linearGradient>
        <linearGradient id='d' x1='22.67' y1='42.69' x2='25.33' y2='47.31' xlinkHref='#c' />
        <linearGradient id='e' x1='37.12' y1='43.48' x2='38.88' y2='46.52' xlinkHref='#c' />
        <linearGradient id='f' x1='36.67' y1='42.69' x2='39.33' y2='47.31' xlinkHref='#c' />
        <linearGradient id='g' x1='23.31' y1='44.3' x2='24.69' y2='46.7' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='h' x1='30.31' y1='44.3' x2='31.69' y2='46.7' xlinkHref='#g' />
        <linearGradient id='i' x1='37.31' y1='44.3' x2='38.69' y2='46.7' xlinkHref='#g' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <g>
        <circle cx='24' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='url(#c)' />
        <path d='M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='url(#d)' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-2s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 24 45; 360 24 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-2s' dur='4s' repeatCount='indefinite' />
      </g>
      <g>
        <circle cx='38' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='url(#e)' />
        <path d='M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='url(#f)' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-1s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 38 45; 360 38 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-1s' dur='4s' repeatCount='indefinite' />
      </g>
      <line x1='24.08' y1='45.01' x2='23.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#g)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
      <line x1='31.08' y1='45.01' x2='30.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#h)'>
        <animateTransform attributeName='transform' type='translate' begin='-0.5s' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.5s' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
      <line x1='38.08' y1='45.01' x2='37.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#i)'>
        <animateTransform attributeName='transform' type='translate' begin='-1s' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-1s' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
    </svg>
  )
}

export const PartyCloudySmoke = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='30.25' y1='48.4' x2='33.25' y2='53.6' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#b8bdc6' />
          <stop offset='0.45' stopColor='#b8bdc6' />
          <stop offset='1' stopColor='#a5aab2' />
        </linearGradient>
        <linearGradient id='d' x1='23.5' y1='38.1' x2='28' y2='45.9' xlinkHref='#c' />
        <linearGradient id='e' x1='33.75' y1='28.8' x2='39.75' y2='39.2' xlinkHref='#c' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <circle cx='31.75' cy='51' r='3' stroke='#afb4bc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#c)'>
        <animateTransform attributeName='transform' type='translate' values='0 0; 0 -17;' dur='3s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0; 1; 1; 1; 0' dur='3s' repeatCount='indefinite' />
        <animate attributeName='r' values='3; 4.5; 6' dur='3s' repeatCount='indefinite' />
      </circle>
      <circle cx='25.75' cy='51' r='4.5' stroke='#afb4bc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#d)'>
        <animateTransform attributeName='transform' type='translate' values='0 0; 0 -17;' dur='3s' begin='-1s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0; 1; 1; 1; 0' dur='3s' begin='-1s' repeatCount='indefinite' />
        <animate attributeName='r' values='3; 4.5; 6' dur='3s' begin='-1s' repeatCount='indefinite' />
        <animate attributeName='cx' values='31.75; 25.75' dur='3s' begin='-1s' repeatCount='indefinite' />
      </circle>
      <circle cx='36.75' cy='51' r='6' stroke='#afb4bc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#e)'>
        <animateTransform attributeName='transform' type='translate' values='0 0; 0 -17;' dur='3s' begin='-2s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0; 1; 1; 1; 0' dur='3s' begin='-2s' repeatCount='indefinite' />
        <animate attributeName='r' values='3; 4.5; 6' dur='3s' begin='-2s' repeatCount='indefinite' />
        <animate attributeName='cx' values='31.75; 36.75' dur='3s' begin='-2s' repeatCount='indefinite' />
      </circle>
    </svg>
  )
}

export const PartyCloudySnowShower = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='23.12' y1='43.48' x2='24.88' y2='46.52' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#86c3db' />
          <stop offset='0.45' stopColor='#86c3db' />
          <stop offset='1' stopColor='#5eafcf' />
        </linearGradient>
        <linearGradient id='d' x1='22.67' y1='42.69' x2='25.33' y2='47.31' xlinkHref='#c' />
        <linearGradient id='e' x1='37.12' y1='43.48' x2='38.88' y2='46.52' xlinkHref='#c' />
        <linearGradient id='f' x1='36.67' y1='42.69' x2='39.33' y2='47.31' xlinkHref='#c' />
        <linearGradient id='g' x1='23.31' y1='44.3' x2='24.69' y2='46.7' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='h' x1='30.31' y1='44.3' x2='31.69' y2='46.7' xlinkHref='#g' />
        <linearGradient id='i' x1='37.31' y1='44.3' x2='38.69' y2='46.7' xlinkHref='#g' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <g>
        <circle cx='24' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='url(#c)' />
        <path d='M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='url(#d)' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-2s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 24 45; 360 24 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-2s' dur='4s' repeatCount='indefinite' />
      </g>
      <g>
        <circle cx='38' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='url(#e)' />
        <path d='M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='url(#f)' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-1s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 38 45; 360 38 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-1s' dur='4s' repeatCount='indefinite' />
      </g>
      <line x1='24.08' y1='45.01' x2='23.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#g)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
      <line x1='31.08' y1='45.01' x2='30.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#h)'>
        <animateTransform attributeName='transform' type='translate' begin='-0.5s' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.5s' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>
      <line x1='38.08' y1='45.01' x2='37.92' y2='45.99' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='url(#i)'>
        <animateTransform attributeName='transform' type='translate' begin='-1s' values='1 -5; -2 10' dur='1.5s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-1s' values='0;1;1;0' dur='1.5s' repeatCount='indefinite' />
      </line>

      <path d='M73.64,45a5,5,0,1,1,3.61,8.46H41.75' fill='none' strokeDasharray='35 22' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='#d4d7dd' transform='scale(0.7)'>
        <animate attributeName='stroke-dashoffset' values='-57; 57' dur='2.1s' repeatCount='indefinite' />
      </path>
      <path d='M69.14,69a5,5,0,1,0,3.61-8.46h-21' fill='none' strokeDasharray='24 15' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='#bec1c6' transform='scale(0.7)'>
        <animate attributeName='stroke-dashoffset' values='-39; 39' dur='2.1s' begin='-.525s' repeatCount='indefinite' />
      </path>
    </svg>
  )
}

export const PartyCloudySnow = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='23.12' y1='43.48' x2='24.88' y2='46.52' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#86c3db' />
          <stop offset='0.45' stopColor='#86c3db' />
          <stop offset='1' stopColor='#5eafcf' />
        </linearGradient>
        <linearGradient id='d' x1='22.67' y1='42.69' x2='25.33' y2='47.31' xlinkHref='#c' />
        <linearGradient id='e' x1='37.12' y1='43.48' x2='38.88' y2='46.52' xlinkHref='#c' />
        <linearGradient id='f' x1='36.67' y1='42.69' x2='39.33' y2='47.31' xlinkHref='#c' />
        <linearGradient id='g' x1='23.31' y1='44.3' x2='24.69' y2='46.7' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='h' x1='30.31' y1='44.3' x2='31.69' y2='46.7' xlinkHref='#g' />
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <g>
        <circle cx='31' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='url(#c)' />
        <path d='M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='url(#d)' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='-1 -6; 1 12' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 31 45; 360 31 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' dur='4s' repeatCount='indefinite' />
      </g>
      <g>
        <circle cx='24' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='url(#e)' />
        <path d='M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='url(#f)' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-2s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 24 45; 360 24 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-2s' dur='4s' repeatCount='indefinite' />
      </g>
      <g>
        <circle cx='38' cy='45' r='1.25' fill='none' strokeMiterlimit='10' stroke='url(#g)' />
        <path d='M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63' fill='none' strokeLinecap='round' strokeMiterlimit='10' stroke='url(#h)' />
        <animateTransform attributeName='transform' type='translate' additive='sum' values='1 -6; -1 12' begin='-1s' dur='4s' repeatCount='indefinite' />
        <animateTransform attributeName='transform' type='rotate' additive='sum' values='0 38 45; 360 38 45' dur='9s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;1;0' begin='-1s' dur='4s' repeatCount='indefinite' />
      </g>
    </svg>
  )
}

export const ThunderstormHailIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        {/* PARTICLES GRADIENT */}
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='22.53' y1='42.95' x2='25.47' y2='48.05' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='d' x1='29.53' y1='42.95' x2='32.47' y2='48.05' xlinkHref='#c' />
        <linearGradient id='e' x1='36.53' y1='42.95' x2='39.47' y2='48.05' xlinkHref='#c' />
        <linearGradient id='f' x1='26.74' y1='37.88' x2='35.76' y2='53.52' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f7b23b' />
          <stop offset='0.45' stopColor='#f7b23b' />
          <stop offset='1' stopColor='#f59e0b' />
        </linearGradient>
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      {/* PARTICLES */}
      <path d='M24,43.5A1.5,1.5,0,1,0,25.5,45,1.5,1.5,0,0,0,24,43.5Z' fill='url(#c)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 18; -4 14' dur='0.6s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='1;1;0' dur='0.6s' repeatCount='indefinite' />
      </path>
      <path d='M31,43.5A1.5,1.5,0,1,0,32.5,45,1.5,1.5,0,0,0,31,43.5Z' fill='url(#d)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 18; -4 14' dur='0.6s' begin='-0.4s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='1;1;0' dur='0.6s' begin='-0.4s' repeatCount='indefinite' />
      </path>
      <path d='M38,43.5A1.5,1.5,0,1,0,39.5,45,1.5,1.5,0,0,0,38,43.5Z' fill='url(#e)'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 18; -4 14' dur='0.6s' begin='-0.2s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='1;1;0' dur='0.6s' begin='-0.2s' repeatCount='indefinite' />
      </path>
      <polygon points='30 36 26 48 30 48 28 58 38 44 32 44 36 36 30 36' stroke='#f6a823' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#f)'>
        <animate attributeName='opacity' values='1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1' dur='2s' repeatCount='indefinite' />
      </polygon>
    </svg>
  )
}

export const ThunderstormRainIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
        <linearGradient id='c' x1='22.53' y1='42.95' x2='25.47' y2='48.05' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#4286ee' />
          <stop offset='0.45' stopColor='#4286ee' />
          <stop offset='1' stopColor='#0950bc' />
        </linearGradient>
        <linearGradient id='d' x1='29.53' y1='42.95' x2='32.47' y2='48.05' xlinkHref='#c' />
        <linearGradient id='e' x1='36.53' y1='42.95' x2='39.47' y2='48.05' xlinkHref='#c' />
        <linearGradient id='f' x1='26.74' y1='37.88' x2='35.76' y2='53.52' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f7b23b' />
          <stop offset='0.45' stopColor='#f7b23b' />
          <stop offset='1' stopColor='#f59e0b' />
        </linearGradient>
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='#e6effc' />
      <line x1='24.39' y1='43.03' x2='23.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='#4286ee'>
        <animateTransform attributeName='transform' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
      <line x1='31.39' y1='43.03' x2='30.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='#4286ee'>
        <animateTransform attributeName='transform' begin='-0.4s' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.4s' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
      <line x1='38.39' y1='43.03' x2='37.61' y2='47.97' fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' stroke='#4286ee'>
        <animateTransform attributeName='transform' begin='-0.2s' type='translate' values='1 -5; -2 10' dur='0.7s' repeatCount='indefinite' />
        <animate attributeName='opacity' begin='-0.2s' values='0;1;1;0' dur='0.7s' repeatCount='indefinite' />
      </line>
      <polygon points='30 36 26 48 30 48 28 58 38 44 32 44 36 36 30 36' stroke='#f6a823' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#f)'>
        <animate attributeName='opacity' values='1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1' dur='2s' repeatCount='indefinite' />
      </polygon>
    </svg>
  )
}

export const UnknownIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <GradientColor isDarkMode={isDarkMode} />
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
      </defs>
      <IsSoonOrMoon isDarkMode={isDarkMode} />
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='url(#b)' />
      <text x='32' y='39' textAnchor='middle' fontSize='15'>?</text>
    </svg>
  )
}

export const LocationIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
      <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' fill={isDarkMode ? '#FFFFFF' : '#000000'} />
    </svg>
  )
}

export const SearchIcon = ({ isDarkMode }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' fill={!isDarkMode ? '#F97F29' : '#FFFFFF'} />
    </svg>
  )
}

export const WindSpeedIcon = ({ speed, isDarkMode = false }) => {
  const mapSpeedToIcon = {
    0: {
      duration: '2.2s',
      begin: '-.55s',
      path: () => {
        return (
          <path d='M46.08,35.46a4.08,4.08,0,0,1,2.92-1,4.08,4.08,0,0,1,2.92,1,3.44,3.44,0,0,1,1,2.64V42a3.49,3.49,0,0,1-1,2.66,4.12,4.12,0,0,1-2.92,1,4.12,4.12,0,0,1-2.92-1A3.46,3.46,0,0,1,45,42V38.1A3.41,3.41,0,0,1,46.08,35.46Zm4.46,1.26a2.66,2.66,0,0,0-3.08,0,1.78,1.78,0,0,0-.54,1.38V42a1.78,1.78,0,0,0,.54,1.38,2.67,2.67,0,0,0,3.08,0A1.78,1.78,0,0,0,51.08,42V38.1A1.78,1.78,0,0,0,50.54,36.72Z' fill='#374151' />
        )
      }
    },
    1: {
      duration: '2.1s',
      begin: '-.525s',
      path: () => {
        return (
          <path d='M51,34.82a.52.52,0,0,1,.11.39v9.64a.51.51,0,0,1-.11.39.52.52,0,0,1-.4.12h-.85a.43.43,0,0,1-.51-.51V37l-2.1,1.17a.62.62,0,0,1-.46.12.57.57,0,0,1-.3-.31L46,37.29a.58.58,0,0,1-.07-.4.67.67,0,0,1,.31-.29l2.93-1.68a1.34,1.34,0,0,1,.72-.21h.71A.52.52,0,0,1,51,34.82Z' fill='#374151' />
        )
      }
    },
    2: {
      duration: '2s',
      begin: '-.5s',
      path: () => {
        return (
          <path d='M49.21,34.48a3.64,3.64,0,0,1,2.65,1,3.23,3.23,0,0,1,1,2.37,3.29,3.29,0,0,1-.9,2.48,10.49,10.49,0,0,1-3.28,1.82l-.22.08-.23.09-.22.09a.92.92,0,0,0-.23.12l-.19.11a1,1,0,0,0-.18.15l-.13.16a.34.34,0,0,0-.09.19.76.76,0,0,0,0,.21v.27h5a.58.58,0,0,1,.4.11.55.55,0,0,1,.11.4v.74a.51.51,0,0,1-.11.39.53.53,0,0,1-.4.12H45.7a.43.43,0,0,1-.51-.51V43.72a3.33,3.33,0,0,1,.23-1.28,2.32,2.32,0,0,1,.71-.93,5.73,5.73,0,0,1,.9-.61c.28-.15.65-.31,1.11-.5a8.51,8.51,0,0,0,1.94-.93,1.84,1.84,0,0,0,.79-1.55,1.66,1.66,0,0,0-.48-1.2,1.74,1.74,0,0,0-1.26-.49,2.09,2.09,0,0,0-2.07,1.34.64.64,0,0,1-.25.35.54.54,0,0,1-.41,0l-.81-.3c-.34-.13-.45-.34-.33-.64A3.87,3.87,0,0,1,49.21,34.48Z' fill='#374151' />
        )
      }
    },
    3: {
      duration: '1.9s',
      begin: '-.475s',
      path: () => {
        return (
          <path d='M51.44,39.79A2.54,2.54,0,0,1,53,42.32a3,3,0,0,1-1,2.38,4.15,4.15,0,0,1-2.88.88q-3.18,0-4.07-2.52a.47.47,0,0,1,.33-.66l.81-.28a.55.55,0,0,1,.41,0,.69.69,0,0,1,.25.34,2.07,2.07,0,0,0,.75,1.06,2.74,2.74,0,0,0,1.52.33q1.89,0,1.89-1.53t-1.56-1.5H47.87a.58.58,0,0,1-.4-.1.53.53,0,0,1-.11-.4v-.68a.55.55,0,0,1,.11-.4.58.58,0,0,1,.4-.11h1.29a1.65,1.65,0,0,0,1.14-.38,1.31,1.31,0,0,0,.43-1c0-1-.56-1.46-1.68-1.46a2.5,2.5,0,0,0-1.42.32,2.21,2.21,0,0,0-.71,1.07.6.6,0,0,1-.24.33.56.56,0,0,1-.42,0l-.81-.29a.46.46,0,0,1-.33-.66A3.56,3.56,0,0,1,46.5,35.1a4.69,4.69,0,0,1,2.58-.62,3.8,3.8,0,0,1,2.6.81,2.82,2.82,0,0,1,.93,2.24A2.4,2.4,0,0,1,51.44,39.79Z' fill='#374151' />
        )
      }
    },
    4: {
      duration: '1.8s',
      begin: '-.45s',
      path: () => {
        return (
          <path d='M53.25,41.33a.57.57,0,0,1,.11.39v.65a.6.6,0,0,1-.11.4.56.56,0,0,1-.4.11h-1v2a.43.43,0,0,1-.51.51h-.73a.55.55,0,0,1-.4-.12.51.51,0,0,1-.11-.39v-2h-5a.6.6,0,0,1-.4-.11.55.55,0,0,1-.11-.4v-.54a1,1,0,0,1,.18-.62l5-6.17a.88.88,0,0,1,.72-.36h.82a.6.6,0,0,1,.4.1.59.59,0,0,1,.11.41v6h1A.55.55,0,0,1,53.25,41.33Zm-6.45-.12h3.26v-4Z' fill='#374151' />
        )
      }
    },
    5: {
      duration: '1.7s',
      begin: '-.425s',
      path: () => {
        return (
          <path d='M52.37,34.82a.57.57,0,0,1,.11.39V36a.42.42,0,0,1-.51.51H47.68l-.22,2.21h1.81a3.62,3.62,0,0,1,2.71.95A3.32,3.32,0,0,1,52.92,42a3.42,3.42,0,0,1-1,2.52,3.69,3.69,0,0,1-2.75,1c-2.12,0-3.48-.81-4.07-2.45a.46.46,0,0,1,.32-.66l.83-.28a.54.54,0,0,1,.4,0,.62.62,0,0,1,.24.36,2.15,2.15,0,0,0,2.26,1.31,1.8,1.8,0,0,0,1.31-.47A1.71,1.71,0,0,0,50.93,42a1.53,1.53,0,0,0-.48-1.19,1.82,1.82,0,0,0-1.28-.45H46a.55.55,0,0,1-.45-.14.6.6,0,0,1-.09-.46l.45-4.36a1,1,0,0,1,.22-.58,1,1,0,0,1,.61-.15H52A.55.55,0,0,1,52.37,34.82Z' fill='#374151' />
        )
      }
    },
    6: {
      duration: '1.6s',
      begin: '-.4s',
      path: () => {
        return (
          <path d='M49.21,38.72c2.59,0,3.88,1.15,3.88,3.42A3.13,3.13,0,0,1,52,44.66a4.41,4.41,0,0,1-3,.92,4.11,4.11,0,0,1-3-1,3.87,3.87,0,0,1-1-2.87V38.39a3.88,3.88,0,0,1,1-2.88,4.1,4.1,0,0,1,3-1q3,0,3.87,2.37a.56.56,0,0,1,0,.41.73.73,0,0,1-.35.25l-.8.28a.46.46,0,0,1-.4,0,.69.69,0,0,1-.25-.35,2.05,2.05,0,0,0-2.11-1.25,1.91,1.91,0,0,0-2.16,2.15V39A8.91,8.91,0,0,1,49.21,38.72Zm-.15,5.1a2.66,2.66,0,0,0,1.61-.42,1.49,1.49,0,0,0,.55-1.26,1.56,1.56,0,0,0-.5-1.25,2.65,2.65,0,0,0-1.64-.41,5.3,5.3,0,0,0-2.18.34v.86A1.9,1.9,0,0,0,49.06,43.82Z' fill='#374151' />
        )
      }
    },
    7: {
      duration: '1.5s',
      begin: '-.375s',
      path: () => {
        return (
          <path d='M52.69,34.82a.52.52,0,0,1,.11.39v.53a1.94,1.94,0,0,1-.15.72L48.86,44.9a.64.64,0,0,1-.29.37,1.65,1.65,0,0,1-.66.09h-.82c-.33,0-.42-.17-.26-.51l3.81-8.39H45.81A.43.43,0,0,1,45.3,36v-.74a.52.52,0,0,1,.12-.39.51.51,0,0,1,.39-.11h6.48A.53.53,0,0,1,52.69,34.82Z' fill='#374151' />
        )
      }
    },
    8: {
      duration: '1.4s',
      begin: '-.35s',
      path: () => {
        return (
          <path d='M46.26,35.27A4.25,4.25,0,0,1,49,34.48a4.53,4.53,0,0,1,2.79.73,2.53,2.53,0,0,1,1,2.12,2.7,2.7,0,0,1-1.53,2.45,3.53,3.53,0,0,1,1.37,1,2.58,2.58,0,0,1,.49,1.66,2.84,2.84,0,0,1-1,2.29,4.71,4.71,0,0,1-3.09.84q-4.07,0-4.06-2.89A2.9,2.9,0,0,1,46.76,40a2.77,2.77,0,0,1-1.49-2.56A2.65,2.65,0,0,1,46.26,35.27Zm4.81,6.82a.77.77,0,0,0-.15-.33l-.2-.24a.75.75,0,0,0-.28-.21l-.33-.16-.4-.13-.42-.11-.47-.12-.47-.1a1.89,1.89,0,0,0-1.52,1.8c0,1,.73,1.46,2.18,1.46a2.68,2.68,0,0,0,1.62-.38,1.3,1.3,0,0,0,.48-1.1A2.33,2.33,0,0,0,51.07,42.09Zm-.66-5.62a2.36,2.36,0,0,0-1.4-.35c-1.23,0-1.85.46-1.85,1.39a1.15,1.15,0,0,0,.45,1,4.17,4.17,0,0,0,1.35.56l.6.15a1.85,1.85,0,0,0,1.35-1.71A1.17,1.17,0,0,0,50.41,36.47Z' fill='#374151' />
        )
      }
    },
    9: {
      duration: '1.3s',
      begin: '-.325s',
      path: () => {
        return (
          <path d='M48.79,41.34q-3.88,0-3.88-3.42A3.15,3.15,0,0,1,46,35.4a4.41,4.41,0,0,1,3-.92,4.06,4.06,0,0,1,3,1,3.85,3.85,0,0,1,1,2.87v3.28a3.84,3.84,0,0,1-1,2.88,4.05,4.05,0,0,1-3,1,3.74,3.74,0,0,1-3.89-2.37.65.65,0,0,1,0-.41.73.73,0,0,1,.35-.25l.8-.28a.49.49,0,0,1,.4,0,.69.69,0,0,1,.25.35,2,2,0,0,0,2.11,1.24,1.9,1.9,0,0,0,2.16-2.14v-.63A8.91,8.91,0,0,1,48.79,41.34Zm1.75-4.56a2.2,2.2,0,0,0-1.6-.55,2.66,2.66,0,0,0-1.61.43,1.5,1.5,0,0,0-.55,1.26,1.56,1.56,0,0,0,.5,1.25,2.65,2.65,0,0,0,1.64.41,5.11,5.11,0,0,0,2.18-.35v-.85A2.12,2.12,0,0,0,50.54,36.78Z' fill='#374151' />
        )
      }
    },
    10: {
      duration: '1.2s',
      begin: '-.3s',
      path: () => {
        return (
          <>
            <path d='M46.28,34.82a.57.57,0,0,1,.11.39v9.64a.43.43,0,0,1-.51.51H45a.52.52,0,0,1-.4-.12.51.51,0,0,1-.11-.39V37l-2.1,1.17a.65.65,0,0,1-.47.12.6.6,0,0,1-.3-.31l-.37-.67a.53.53,0,0,1-.07-.4c0-.1.14-.19.31-.29l2.92-1.68a1.37,1.37,0,0,1,.72-.21h.72A.55.55,0,0,1,46.28,34.82Z' fill='#374151' />
            <path d='M49.38,35.46a4.84,4.84,0,0,1,5.84,0,3.44,3.44,0,0,1,1,2.64V42a3.49,3.49,0,0,1-1,2.66,4.88,4.88,0,0,1-5.84,0A3.42,3.42,0,0,1,48.33,42V38.1A3.38,3.38,0,0,1,49.38,35.46Zm4.46,1.26a2.66,2.66,0,0,0-3.08,0,1.78,1.78,0,0,0-.55,1.38V42a1.78,1.78,0,0,0,.55,1.38,2.67,2.67,0,0,0,3.08,0A1.78,1.78,0,0,0,54.38,42V38.1A1.78,1.78,0,0,0,53.84,36.72Z' fill='#374151' />
          </>
        )
      }
    },
    11: {
      duration: '1.1s',
      begin: '-.275s',
      path: () => {
        return (
          <>
            <path d='M47.73,34.82a.52.52,0,0,1,.11.39v9.64a.51.51,0,0,1-.11.39.52.52,0,0,1-.4.12h-.85a.43.43,0,0,1-.51-.51V37l-2.1,1.17a.62.62,0,0,1-.46.12.57.57,0,0,1-.3-.31l-.38-.67a.58.58,0,0,1-.07-.4A.67.67,0,0,1,43,36.6l2.93-1.68a1.34,1.34,0,0,1,.72-.21h.71A.52.52,0,0,1,47.73,34.82Z' fill='#374151' />
            <path d='M54.33,34.82a.52.52,0,0,1,.11.39v9.64a.51.51,0,0,1-.11.39.53.53,0,0,1-.4.12h-.85a.43.43,0,0,1-.51-.51V37l-2.1,1.17a.63.63,0,0,1-.47.12.55.55,0,0,1-.29-.31l-.38-.67a.58.58,0,0,1-.07-.4.67.67,0,0,1,.31-.29l2.93-1.68a1.31,1.31,0,0,1,.71-.21h.72A.53.53,0,0,1,54.33,34.82Z' fill='#374151' />
          </>
        )
      }
    },
    12: {
      duration: '1s',
      begin: '-.25s',
      path: () => {
        return (
          <>
            <path d='M46.55,34.82a.57.57,0,0,1,.11.39v9.64a.43.43,0,0,1-.51.51h-.86a.43.43,0,0,1-.5-.51V37l-2.11,1.17a.62.62,0,0,1-.46.12.6.6,0,0,1-.3-.31l-.38-.67a.52.52,0,0,1-.06-.4c0-.1.14-.19.31-.29l2.92-1.68a1.37,1.37,0,0,1,.72-.21h.72A.55.55,0,0,1,46.55,34.82Z' fill='#374151' />
            <path d='M52.51,34.48a3.64,3.64,0,0,1,2.65,1,3.23,3.23,0,0,1,1,2.37,3.29,3.29,0,0,1-.9,2.48A10.49,10.49,0,0,1,52,42.13l-.22.08-.23.09-.22.09a.92.92,0,0,0-.23.12l-.19.11a1,1,0,0,0-.18.15l-.13.16a.34.34,0,0,0-.09.19.76.76,0,0,0,0,.21v.27h5a.58.58,0,0,1,.4.11.55.55,0,0,1,.11.4v.74a.51.51,0,0,1-.11.39.53.53,0,0,1-.4.12H49a.43.43,0,0,1-.51-.51V43.72a3.33,3.33,0,0,1,.23-1.28,2.32,2.32,0,0,1,.71-.93,5.73,5.73,0,0,1,.9-.61c.28-.15.65-.31,1.11-.5a8.51,8.51,0,0,0,1.94-.93,1.84,1.84,0,0,0,.79-1.55,1.66,1.66,0,0,0-.48-1.2,1.74,1.74,0,0,0-1.26-.49,2.09,2.09,0,0,0-2.07,1.34.64.64,0,0,1-.25.35.54.54,0,0,1-.41,0l-.81-.3c-.34-.13-.45-.34-.33-.64A3.87,3.87,0,0,1,52.51,34.48Z' fill='#374151' />
          </>
        )
      }
    }
  }

  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
      <defs>
        <linearGradient id='a' x1='27.56' y1='17.64' x2='38.27' y2='36.19' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#d4d7dd' />
          <stop offset='0.45' stopColor='#d4d7dd' />
          <stop offset='1' stopColor='#bec1c6' />
        </linearGradient>
        <linearGradient id='b' x1='19.96' y1='29.03' x2='31.37' y2='48.8' xlinkHref='#a' />
      </defs>
      <path d='M43.64,20a5,5,0,1,1,3.61,8.46H11.75' fill='none' strokeDasharray='35 22' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke={isDarkMode ? '#1A2841' : '#d4d7dd'}>
        <animate attributeName='stroke-dashoffset' values='-57; 57' dur={mapSpeedToIcon[speed].duration} repeatCount='indefinite' />
      </path>
      <path d='M29.14,44a5,5,0,1,0,3.61-8.46h-21' fill='none' strokeDasharray='24 15' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3' stroke={isDarkMode ? '#1A2841' : '#d4d7dd'}>
        <animate attributeName='stroke-dashoffset' values='-39; 39' dur={mapSpeedToIcon[speed].duration} begin={mapSpeedToIcon[speed].begin} repeatCount='indefinite' />
      </path>
      {mapSpeedToIcon[speed].path()}
    </svg>
  )
}

export const CompassIcon = ({ direction }) => {
  const mapDirectionToIcon = {
    N: 0,
    NNE: 22.5,
    NE: 45,
    ENE: 67.5,
    E: 90,
    ESE: 112.5,
    SE: 135,
    SSE: 157.5,
    S: 180,
    SSW: 202.5,
    SW: 225,
    WSW: 247.5,
    W: 270,
    WNW: 292.5,
    NW: 315,
    NNW: 337.5
  }

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <linearGradient id='a' x1='23' y1='16.41' x2='41' y2='47.59' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#6b7280' />
          <stop offset='0.45' stopColor='#6b7280' />
          <stop offset='1' stopColor='#374151' />
        </linearGradient>
      </defs>
      <circle cx='32' cy='32' r='18' stroke='#e5e7eb' strokeMiterlimit='10' strokeWidth='2' fill='#6b7280' />
      <path d='M36.47,39.46l-4.3-15.09A.17.17,0,0,0,32,24.2a.16.16,0,0,0-.17.17L27.51,39.46a.35.35,0,0,0,.07.29q.06.11.24,0l4-1.5a.47.47,0,0,1,.33,0l4,1.5c.13.07.22.07.28,0A.26.26,0,0,0,36.47,39.46Z' fill='#fff' stroke='#fff' strokeMiterlimit='10' strokeWidth='0.5'>
        <animateTransform attributeName='transform' type='rotate' values={`${mapDirectionToIcon[direction] - 10} 32 32;${mapDirectionToIcon[direction]} 32 32;${mapDirectionToIcon[direction] - 10} 32 32`} calcMode='spline' dur='1s' keySplines='0.5 0 0.5 1; 0.5 0 0.5 1' repeatCount='indefinite' transform='translate(0)' />
      </path>
    </svg>

  )
}

export const PressureIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <linearGradient id='a' x1='23' y1='16.41' x2='41' y2='47.59' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#6b7280' />
          <stop offset='0.45' stopColor='#6b7280' />
          <stop offset='1' stopColor='#374151' />
        </linearGradient>
      </defs>
      <circle cx='32' cy='32' r='18' stroke='#e5e7eb' strokeMiterlimit='10' strokeWidth='2' fill='#6b7280' />
      <path d='M32,25V19M45.5,32h-6M25,32H19m22.5-8.5-3,3m-13,0-3-3m16,14,3,3m-19,0,3-3' fill='none' stroke='#9ca3af' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='32' cy='32' r='3' fill='#ef4444' />
      <line x1='32' y1='35.5' x2='32' y2='20.5' fill='none' stroke='#ef4444' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2'>
        <animateTransform attributeName='transform' dur='9s' values='30 32 32; 55 32 32; 45 32 32; 55 32 32; 30 32 32' repeatCount='indefinite' type='rotate' />
      </line>
    </svg>
  )
}

export const VisibilityIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <linearGradient id='a' x1='40.76' y1='23' x2='50.83' y2='40.46' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#9ca3af' />
          <stop offset='0.45' stopColor='#9ca3af' />
          <stop offset='1' stopColor='#6b7280' />
        </linearGradient>
        <linearGradient id='b' x1='22.56' y1='21.96' x2='39.2' y2='50.8' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#f3f7fe' />
          <stop offset='0.45' stopColor='#f3f7fe' />
          <stop offset='1' stopColor='#deeafb' />
        </linearGradient>
      </defs>
      <path d='M34.23,33.45a4.05,4.05,0,0,0,4.05,4H54.79a4.34,4.34,0,0,0,.81-8.61,3.52,3.52,0,0,0,.06-.66,4.06,4.06,0,0,0-6.13-3.48,6.08,6.08,0,0,0-11.25,3.19,6.34,6.34,0,0,0,.18,1.46h-.18A4.05,4.05,0,0,0,34.23,33.45Z' stroke='#848b98' strokeMiterlimit='10' strokeWidth='0.5' fill='#848b98'>
        {/* <animateTransform attributeName='transform' type='translate' values='-2.1 0; 2.1 0; -2.1 0' dur='7s' repeatCount='indefinite' /> */}
      </path>
      <path d='M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z' stroke='#e6effc' strokeMiterlimit='10' strokeWidth='0.5' fill='#e6effc'>
        {/* <animateTransform attributeName='transform' type='translate' values='-3 0; 3 0; -3 0' dur='7s' repeatCount='indefinite' /> */}
      </path>
      <ellipse cx='32' cy='35' rx='8' ry='14' fill='#fff' transform='rotate(-90, 32, 35)' />
      <circle cx='32' cy='35' r='4' fill='#000' />
    </svg>
  )
}

export const HumidityIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <linearGradient id='a' x1='23.61' y1='21.85' x2='37.27' y2='45.52' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#3392d6' />
          <stop offset='0.45' stopColor='#3392d6' />
          <stop offset='1' stopColor='#2477b2' />
        </linearGradient>
      </defs>
      <path d='M32,17c-6.09,9-10,14.62-10,20.09a10,10,0,0,0,20,0C42,31.62,38.09,26,32,17Z' stroke='#2885c7' strokeMiterlimit='10' strokeWidth='0.5' fill='#2885c7' />
      <path d='M26.24,30.19a3,3,0,0,1,2.12-.69,3,3,0,0,1,2.12.69,2.51,2.51,0,0,1,.74,1.92v1.24a2.48,2.48,0,0,1-.74,1.9,3.05,3.05,0,0,1-2.12.68,3,3,0,0,1-2.12-.68,2.48,2.48,0,0,1-.74-1.9V32.11A2.51,2.51,0,0,1,26.24,30.19Zm11-.23a.42.42,0,0,1-.08.4L29,41.69a1.37,1.37,0,0,1-.44.44,1.87,1.87,0,0,1-.72.09h-.67c-.2,0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1,1,0,0,1,.41-.41,2,2,0,0,1,.67-.08h.76Q37.19,29.78,37.26,30Zm-8.9,1.17c-.79,0-1.19.36-1.19,1.07v1c0,.71.4,1.07,1.19,1.07s1.19-.36,1.19-1.07v-1C29.55,31.49,29.15,31.13,28.36,31.13Zm5.16,5.63a3,3,0,0,1,2.12-.69,3,3,0,0,1,2.12.69,2.51,2.51,0,0,1,.74,1.92v1.24a2.48,2.48,0,0,1-.74,1.9,3,3,0,0,1-2.12.68,3.05,3.05,0,0,1-2.12-.68,2.48,2.48,0,0,1-.74-1.9V38.68A2.51,2.51,0,0,1,33.52,36.76Zm2.12.94c-.79,0-1.19.35-1.19,1.07v1c0,.73.4,1.09,1.19,1.09s1.19-.36,1.19-1.09v-1C36.83,38.05,36.43,37.7,35.64,37.7Z' fill='#fff' />
    </svg>
  )
}

export const UltravioletIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <defs>
        <clipPath id='a'>
          <path d='M33.5,48.5v-9a6,6,0,0,1,6-6h17V7.5H7.5v49h28V53A6,6,0,0,1,33.5,48.5Z' fill='none' />
        </clipPath>
        <linearGradient id='b' x1='26.75' y1='22.91' x2='37.25' y2='41.09' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#fbbf24' />
          <stop offset='0.45' stopColor='#fbbf24' />
          <stop offset='1' stopColor='#f59e0b' />
        </linearGradient>
      </defs>
      <g clipPath='url(#a)'>
        <circle cx='32' cy='32' r='10.5' stroke='#f8af18' strokeMiterlimit='10' strokeWidth='0.5' fill='#f8af18' />
        <path d='M32,15.71V9.5m0,45V48.29M43.52,20.48l4.39-4.39M16.09,47.91l4.39-4.39m0-23-4.39-4.39M47.91,47.91l-4.39-4.39M15.71,32H9.5m45,0H48.29' fill='none' stroke='#fbbf24' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3'>
          <animateTransform attributeName='transform' dur='45s' values='0 32 32; 360 32 32' repeatCount='indefinite' type='rotate' />
        </path>
      </g>
      <path d='M41.69,46.56A1.87,1.87,0,0,0,43,47c1.17,0,1.76-.52,1.76-1.56V39.57a.66.66,0,0,1,.12-.45.64.64,0,0,1,.44-.12h1.12a.46.46,0,0,1,.57.57v5.77A3.5,3.5,0,0,1,46,48a4.17,4.17,0,0,1-3,1,4.14,4.14,0,0,1-3-1,3.5,3.5,0,0,1-1-2.68V39.57a.46.46,0,0,1,.57-.57h1.12a.6.6,0,0,1,.43.12.66.66,0,0,1,.12.45V45.4A1.47,1.47,0,0,0,41.69,46.56Z' fill='#374151' />
      <path d='M57.44,39.56l-3.17,9a.72.72,0,0,1-.25.38.81.81,0,0,1-.45.1H52.44a.89.89,0,0,1-.45-.09.63.63,0,0,1-.24-.36l-3.19-9c-.14-.37,0-.56.37-.56h1a1.6,1.6,0,0,1,.73.11.67.67,0,0,1,.3.41l1.63,5.25c.06.23.13.48.19.77s.1.5.13.67l0,.25h.11a9.3,9.3,0,0,1,.35-1.67l1.6-5.27a.61.61,0,0,1,.3-.41,1.51,1.51,0,0,1,.71-.11h1C57.46,39,57.58,39.19,57.44,39.56Z' fill='#374151' />
    </svg>
  )
}
