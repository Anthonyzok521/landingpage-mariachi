import { Box } from "../../atoms/Containers/"
import { Text, Title } from "../../atoms/Texts"
import style from './Banner.module.css'
export const Banner: React.FC = () => {
    return (
        <Box>
            <Box className="flex-col">
                <Title text="Mariachi Cocula Internacional" />
                <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa dolor quidem alias deserunt minus ipsam temporibus omnis, neque repudiandae tempora totam, deleniti harum! Sed quibusdam exercitationem saepe eligendi maiores." />
            </Box>
            <Box className={style.Banner}>

            </Box>
        </Box>
    )
}
