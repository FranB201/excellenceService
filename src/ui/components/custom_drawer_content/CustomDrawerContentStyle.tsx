import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor:'#F8F8FF'

    },
    header: {
        padding: 20,
        backgroundColor: '#b5d4cc',
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5,

    },
    info: {
        fontSize: 14,
    },

    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    excellenceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    excellenceText: {
        marginRight: 5,
        marginTop: 5,
    },

    starIcon: {
        color: "#FFD700",
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },

    drawerItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    logoutButton: {
        backgroundColor: '#567568',
        borderRadius: 5,
        margin: 10
    },
    logoutText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 100, // Ajusta la altura según tus necesidades
    },
});