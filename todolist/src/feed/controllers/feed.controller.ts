import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { DeleteResult } from "typeorm";
import { FeedPost } from "../models/post.interfaces";
import { FeedService } from "../services/feed.service";

@Controller("feed")
export class FeedController {
  constructor(private feedService: FeedService) {}

  //Http Post method
  @Post()
  create(@Body() feedPost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feedPost);
  }
  //Http Get method
  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPosts();
  }
  //Http Get method
  @Get(":id")
  findOne(@Param("id") id: number): Observable<FeedPost> {
    return this.feedService.findOnePost(id);
  }
  //Http Delete method
  @Delete(":id")
  delete(@Param("id") id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
