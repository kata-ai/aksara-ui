import * as React from 'react';

interface UploadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const UploadIcon: React.FC<UploadIconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 89 87" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.4788 12.1681L56.6924 14.8001C56.8605 16.8711 58.7044 18.4382 60.7753 18.2701L74.1148 17.1877L67.6573 11.8184C76.626 11.5671 83.0053 12.0997 83.1652 18.4609C83.2045 20.0236 83.3751 23.3082 83.597 27.5793C84.483 44.6306 86.1859 77.4038 83.6066 79.0972C79.1669 82.0118 25.6476 82.9184 16.6775 82.2061C15.9939 82.1518 15.3468 82.1046 14.7347 82.06C7.24209 81.5135 4.9975 81.3497 5.31418 73.2704C5.55752 67.0624 4.97296 18.4609 4.97296 18.4609C5.21102 11.7469 18.2715 12.0084 33.4291 12.3118C39.9976 12.4433 46.96 12.5827 53.4433 12.1657C54.4642 12.18 55.4771 12.1793 56.4788 12.1681ZM56.8286 42.4551C56.0368 42.5193 55.2202 42.279 54.6226 41.7144L47.1187 35.3764L49.2258 61.343C49.3593 62.9876 48.1329 64.4972 46.4274 64.6356C44.7219 64.774 43.2731 63.5427 43.1347 61.8372L41.0291 35.8892L34.9286 43.0672C33.8092 44.3843 31.921 44.5375 30.6039 43.4182C29.2868 42.2988 29.1336 40.4106 30.253 39.0935L40.8471 26.693C41.3324 25.878 42.1934 25.3103 43.2295 25.2263C44.2684 25.142 45.2121 25.5659 45.8223 26.2957L58.5404 37.1047C59.8574 38.224 60.0106 40.1123 58.8913 41.4293C58.3267 42.027 57.6204 42.3908 56.8286 42.4551Z"
      fill="#FFE592"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M73.8672 17.1201L73.9098 17.1556L77.943 66.8588C78.2395 70.5135 75.4971 73.7403 71.8424 74.0369L24.2101 77.902C20.5554 78.1986 17.3286 75.4562 17.0321 71.8015L12.1784 11.987C11.8818 8.33234 14.6243 5.10552 18.2789 4.80896L55.4346 1.79394L55.6593 1.98079L56.6924 14.7124C56.8605 16.7834 58.7044 18.3505 60.7753 18.1825L73.8672 17.1201Z"
      fill="#006FE6"
    />
    <path
      d="M43.1347 61.8051C43.2731 63.5107 44.7219 64.742 46.4274 64.6036C48.1329 64.4652 49.3592 62.9555 49.2258 61.3109L47.1187 35.3443L54.6226 41.6823C55.2202 42.247 56.0367 42.4873 56.8286 42.423C57.6204 42.3587 58.3266 41.9949 58.8913 41.3973C60.0106 40.0802 59.8574 38.192 58.5403 37.0726L45.8223 26.2636C45.212 25.5338 44.2684 25.1099 43.2295 25.1942C42.1934 25.2783 41.3324 25.8459 40.847 26.6609L30.253 39.0614C29.1336 40.3785 29.2868 42.2667 30.6039 43.3861C31.921 44.5055 33.8092 44.3522 34.9286 43.0352L41.0291 35.8571L43.1347 61.8051Z"
      fill="#FFE592"
    />
  </svg>
);

export default UploadIcon;
