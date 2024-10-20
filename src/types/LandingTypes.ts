
export interface MembershipType {
    img: string,
    title: string,
    cost: string,
    features: {
        benefit1: string,
        benefit2: string,
        benefit3: string
    },
};
export interface userTypes {
    username: string,
    email: string,
    password: string,
};

export interface moreUserTypes {
    identificationDocument: File[] | undefined,
    Name: string,
    About: string,
    Link: string,
} 

