import { useBoardStore } from "@/store/board.store";

const Tag = ({ children }) => {
	return <span className="card-tag">{children}</span>;
};
const Card = ({ card }) => {
	const { setDraggingCard } = useBoardStore((state) => state);
	const handleDragStart = (id) => {
		setDraggingCard(id);
	};
	const handleDragEnd = () => {
		setDraggingCard("");
	};
	const { title, id, tags, users } = card;
	return (
		<>
			<div
				draggable={"true"}
				className="card"
				onDragStart={() => handleDragStart(id)}
				onDragEnd={handleDragEnd}
				style={{ viewTransitionName: `card-${id}` }}
			>
				<h2 className="card-title  ">{title}</h2>
				<div className="card-id-wrapper">
					<span className="card-id">#{id}</span>
					{tags?.map((tags) => <Tag key={tags}>{tags}</Tag>)}
				</div>
				<div className="card-icon-wrapper">
					{users?.map((user) => {
						return (
							<button
								key={user}
								type="button"
								className="card-btn"
							>
								<img
									className="h-8 w-8 rounded-full card-icon "
									alt={user}
									src={`https://api.dicebear.com/6.x/notionists/svg?seed=${user}`}
								/>
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Card;
