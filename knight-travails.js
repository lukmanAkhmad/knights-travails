function knightMoves(start, end) {
  const que = [];
  const connection = [];
  const positions = [];
  const result = [];
  const visited = {};

  if (!visited[start]) {
    visited[start] = true;
  }

  que.push(start);

  while (
    !(que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
  ) {
    const currVertex = que[0];
    // console.log(currVertex);

    if (currVertex[0] + 1 <= 7 && currVertex[1] - 2 >= 0) {
      // console.log("R = +1, C = -2");
      const nextMove = [currVertex[0] + 1, currVertex[1] - 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = +1, C = -2");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    if (currVertex[0] + 2 <= 7 && currVertex[1] - 1 >= 0) {
      // console.log("R = +2, C = -1");
      const nextMove = [currVertex[0] + 2, currVertex[1] - 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = +2, C = -1");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    if (currVertex[0] + 1 <= 7 && currVertex[1] + 2 <= 7) {
      // console.log("R = +1, C = +2");
      const nextMove = [currVertex[0] + 1, currVertex[1] + 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = +1, C = +2");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    if (currVertex[0] + 2 <= 7 && currVertex[1] + 1 <= 7) {
      // console.log("R = +2, C = +1");
      const nextMove = [currVertex[0] + 2, currVertex[1] + 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = +2, C = +1");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    if (currVertex[0] - 1 >= 0 && currVertex[1] - 2 >= 0) {
      // console.log("R = -1, C = -2");
      const nextMove = [currVertex[0] - 1, currVertex[1] - 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = -1, C = -2");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    if (currVertex[0] - 2 >= 0 && currVertex[1] - 1 >= 0) {
      // console.log("R = -2, C = -1");
      const nextMove = [currVertex[0] - 2, currVertex[1] - 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = -2, C = -1");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    if (currVertex[0] - 2 >= 0 && currVertex[1] + 1 <= 7) {
      // console.log("R = -2, C = +1");
      const nextMove = [currVertex[0] - 2, currVertex[1] + 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = -2, C = +1");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    if (currVertex[0] - 1 >= 0 && currVertex[1] + 2 <= 7) {
      // console.log("R = -1, C = +2");
      const nextMove = [currVertex[0] - 1, currVertex[1] + 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;
        // console.log(visited[nextMove]);
        console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      console.log("STOP from R = -1, C = +2");

      const connectionReverse = connection.reverse();
      let tempNextString;

      connectionReverse.forEach((item) => {
        const currentItem = item.current;
        const nextItem = item.next;
        const currentItemString = currentItem.join();
        const nextItemString = nextItem.join();
        const endString = end.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          result.push(nextItem);
          tempNextString = currentItemString;
        }
      });

      console.log("ini result");
      console.log(result);
      result.push(start);
      const reverseSimpan = result.reverse();
      console.log(reverseSimpan);
      return reverseSimpan;
    }

    que.shift();
  }
}

export { knightMoves };

// console.log(knightMoves([0, 0], [1, 2]));
// console.log(knightMoves([0, 0], [3, 3]));
// console.log(knightMoves([3, 3], [0, 0]));
// console.log(knightMoves([0, 0], [7, 7]));
// knightMoves([3, 3], [4, 3]);
