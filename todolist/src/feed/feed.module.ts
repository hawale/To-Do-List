import { Module } from "@nestjs/common";
import { FeedPostEntity } from "./models/post.entity";
import { FeedService } from "./services/feed.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeedController } from "./controllers/feed.controller";
@Module({
  imports: [TypeOrmModule.forFeature([FeedPostEntity])],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
