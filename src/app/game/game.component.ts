import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BehaviorSubject, Observable, Observer } from "rxjs";
import { BoardService } from "../board.service";
import { COORD, BoardProcessed } from "../generator";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  constructor(public service: BoardService) {
    console.log(this.service.observable);
  }
  ngOnInit(): void {}
}
