import { StyleSheet } from "react-native"; 
import theme from "../../global/styles/theme";


export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 48, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
    }, 

    title: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: theme.fonts.medium,
        
    }

})