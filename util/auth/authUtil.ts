import { User as FirebaseUser } from "firebase/auth";
import User from "../../model/authModel";

// Function to convert Firebase User to our User model
function convertFirebaseUserToUser(firebaseUser: FirebaseUser): User {
    return {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        emailVerified: firebaseUser.emailVerified,
        phoneNumber: firebaseUser.phoneNumber,
        isAnonymous: firebaseUser.isAnonymous,
        metadata: {
            creationTime: firebaseUser.metadata.creationTime,
            lastSignInTime: firebaseUser.metadata.lastSignInTime,
        },
        providerData: firebaseUser.providerData.map((provider) => ({
            providerId: provider.providerId,
            uid: provider.uid,
            displayName: provider.displayName,
            email: provider.email,
            phoneNumber: provider.phoneNumber,
            photoURL: provider.photoURL,
        })),
    };
}
