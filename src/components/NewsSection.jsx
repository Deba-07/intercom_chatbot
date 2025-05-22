// import news from '../data/dummyNews';

// const NewsSection = () => {
//   return (
//     <div className="space-y-4 p-3">
//       {news.map((item, i) => (
//         <div key={i} className="border rounded p-2 flex gap-2">
//           <img src={item.image} alt="" className="w-16 h-16 object-cover rounded" />
//           <div>
//             <h3 className="font-bold text-sm">{item.title}</h3>
//             <p className="text-xs text-gray-500">{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsSection;

const NewsSection = () => (
  <div className="p-4 space-y-3">
    <div className="bg-white p-3 rounded shadow text-sm text-gray-700">
      📢 <strong>New Feature:</strong> Check out our real-time dashboard update.
    </div>
    <div className="bg-white p-3 rounded shadow text-sm text-gray-700">
      🎉 <strong>Event:</strong> Built For You — May 21, 2025, Live on LinkedIn.
    </div>
  </div>
);

export default NewsSection;
