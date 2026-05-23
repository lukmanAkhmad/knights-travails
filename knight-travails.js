function knightMoves(start, end) {
  const que = [];
  const connection = [];
  const positions = [];
  const visited = {};

  if (!visited[start]) {
    visited[start] = true;
  }

  que.push(start);

  while (
    !(que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
  ) {
    const currVertex = que[0];

    if (currVertex[0] + 1 <= 7 && currVertex[1] - 2 >= 0) {
      // console.log("R = +1, C = -2");
      const nextMove = [currVertex[0] + 1, currVertex[1] - 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = +1, C = -2");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    if (currVertex[0] + 2 <= 7 && currVertex[1] - 1 >= 0) {
      // console.log("R = +2, C = -1");
      const nextMove = [currVertex[0] + 2, currVertex[1] - 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = +2, C = -1");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    if (currVertex[0] + 1 <= 7 && currVertex[1] + 2 <= 7) {
      // console.log("R = +1, C = +2");
      const nextMove = [currVertex[0] + 1, currVertex[1] + 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = +1, C = +2");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    if (currVertex[0] + 2 <= 7 && currVertex[1] + 1 <= 7) {
      // console.log("R = +2, C = +1");
      const nextMove = [currVertex[0] + 2, currVertex[1] + 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = +2, C = +1");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    if (currVertex[0] - 1 >= 0 && currVertex[1] - 2 >= 0) {
      // console.log("R = -1, C = -2");
      const nextMove = [currVertex[0] - 1, currVertex[1] - 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = -1, C = -2");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    if (currVertex[0] - 2 >= 0 && currVertex[1] - 1 >= 0) {
      // console.log("R = -2, C = -1");
      const nextMove = [currVertex[0] - 2, currVertex[1] - 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = -2, C = -1");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    if (currVertex[0] - 2 >= 0 && currVertex[1] + 1 <= 7) {
      // console.log("R = -2, C = +1");
      const nextMove = [currVertex[0] - 2, currVertex[1] + 1];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = -2, C = +1");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    if (currVertex[0] - 1 >= 0 && currVertex[1] + 2 <= 7) {
      // console.log("R = -1, C = +2");
      const nextMove = [currVertex[0] - 1, currVertex[1] + 2];

      if (!visited[nextMove]) {
        visited[nextMove] = true;

        // console.log(`${nextMove} came from ${currVertex}`);
        que.push(nextMove);
        connection.push({ current: currVertex, next: nextMove });
      }
    }

    if (
      que[que.length - 1][0] === end[0] &&
      que[que.length - 1][1] === end[1]
    ) {
      // console.log("STOP from R = -1, C = +2");

      let tempNextString;
      const result = connection.reduceRight((accumulator, currentValue) => {
        const currentItemString = currentValue.current.join();
        const nextItem = currentValue.next;
        const nextItemString = currentValue.next.join();
        const endString = end.join();
        const accuString = accumulator.join();

        if (nextItemString === endString || nextItemString === tempNextString) {
          accumulator.push(nextItem);
          tempNextString = currentItemString;
        }

        return accumulator;
      }, []);
      result.push(start);

      const reverseResult = result.reverse();

      console.log(
        `You made it in ${reverseResult.length - 1} moves! Here's Your path:`,
      );
      reverseResult.forEach((el) => console.log(el));
      return reverseResult;
    }

    que.shift();
  }
}

export { knightMoves };
