import SkillList from "../../common/SkillList";
import styles from "../Skills/SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import checkLightMarkIcon from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";

const SkillListComponent = ({skills}) => {
  
  const { theme, toggleTheme } = useTheme();
  const checkIcon = theme === "light" ? checkLightMarkIcon : checkMarkIcon;
  return (
    <div className={styles.skillList}>
        {skills.map((skill, index) => (
            <SkillList key={index} src={checkIcon} skill={skill}/>
        ))}
    </div>
  )
}

export default SkillListComponent
