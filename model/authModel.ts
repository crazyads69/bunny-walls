import { User as FirebaseUser } from "firebase/auth";

export default interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    isAnonymous: boolean;
    metadata: {
        creationTime?: string;
        lastSignInTime?: string;
    };
    providerData: Array<{
        providerId: string;
        uid: string;
        displayName: string | null;
        email: string | null;
        phoneNumber: string | null;
        photoURL: string | null;
    }>;
}
