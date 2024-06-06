// import checkMarkIcon from "../assets/checkmark-dark.svg";
// import styles from "../sections/Skills/SkillsStyles.module.css"

// function SkillList({ skill }) {
//   return (
//     <span>
//       {skill.map((item) => (
//         <div className={styles.skillList}>
//           <img src={checkMarkIcon} alt="Checkmark Icon" />
//           <p>{item.FE}</p>
//           <hr/>
//           <p>{item.framework}</p>
//           <hr/>
//           <p>{item.library}</p>
//         </div>
//      ))}
//     </span>
//   );
// }

// export default SkillList;

import styles from "../sections/Skills/SkillsStyles.module.css";

function SkillList({src, skill}) {
  return (
    <div className={styles.skillList}>
      <img src={src} alt=""/>
      <p>{skill}</p>
    </div>
  )
}

export default SkillList
