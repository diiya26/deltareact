import dia from "../dia.jpg";

export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: "Diya Prajapati"
                }}
            />
        </Card>
    );
}

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={dia}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}