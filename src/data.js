import logo1 from './img/microsoft.jpg'
import logo2 from './img/google.png'
import logo3 from './img/samsung.jpeg'

const blogs = [
    {
        id: "Microsoft",
        logo : logo1,
        title: "Microsoft Corporation",
        content: "Microsoft Corporation is a global leader in software, services, devices, and solutions. Founded by Bill Gates and Paul Allen, the company started by developing and selling BASIC interpreters for the Altair 8800. Today, Microsoft is renowned for its Windows operating system, the Microsoft Office suite, and its Azure cloud computing platform.",
        founder: {
            name: "Bill Gates and Paul Allen",
            avatar: "https://i.pravatar.cc/150?img=11"
        },
        date: "April 4, 1975",
        Technology: ["Azure", ".NET", "Power BI"]
    },
    {
        id: "Google",
        logo : logo2,
        title: "Google",
        content: "Google LLC, founded by Larry Page and Sergey Brin, is synonymous with internet search and advertising technologies. What started as a search engine project at Stanford University has grown into a tech giant offering services like YouTube, Google Maps, and the Android operating system.",
        founder: {
            name: "Larry Page and Sergey Brin",
            avatar: "https://i.pravatar.cc/150?img=12"
        },
        date: "September 4, 1998",
        Technology: ["Google Cloud"]
    },
    {
        id: "Samsung",
        logo : logo3,
        title: "Samsung Electronics",
        content: "Samsung Electronics, a key subsidiary of the Samsung Group, has grown from its origins in South Korea to become a global powerhouse in electronics and technology. Known for its smartphones, televisions, and semiconductors, Samsung is at the forefront of innovation in consumer electronics and technology.",
        founder: {
            name: "Lee Byung-chul",
            avatar: "https://i.pravatar.cc/150?img=27"
        },
        date: "March 1, 1938",
        Technology: ["5G Technology"]
    }
];

export default blogs;
