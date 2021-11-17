import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, identity, Observable } from "rxjs";
import { DeleteResult, Repository } from "typeorm";
import { FeedPostEntity } from "../models/post.entity";
import { FeedPost } from "../models/post.interfaces";

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>
  ) {}

  // This method for create To-do list.
  createPost(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost));
  }
  // This method for get all To-do List Data.
  findAllPosts(): Observable<FeedPost[]> {
    return from(this.feedPostRepository.find());
  }
  // This method for get single To-do task data using Id.
  findOnePost(id: number): Observable<FeedPost> {
    return from(this.feedPostRepository.findOne(id));
  }
  //This method for delete perticular Task from To-do list using Id.
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}
