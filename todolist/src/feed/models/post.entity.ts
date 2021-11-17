import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// To add database columns
@Entity("feed_post")
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  title: string;

  @Column({ default: "" })
  discription: string;

  @Column({ type: "date", default: () => "CURRENT_TIMESTAMP" })
  dueDate: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createDate: Date;
}
