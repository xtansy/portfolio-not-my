export const cursor = () => {

    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".follower");

    let cursorX = 0;
    let cursorY = 0;

    let followerX = 0;
    let followerY = 0;

    window.addEventListener("mousemove", (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
    })

    TweenMax.to({}, 0.01, {
        repeat: -1,
        onRepeat: () => {
            followerX += (cursorX - followerX) / 5;
            followerY += (cursorY - followerY) / 5;

            TweenMax.set(cursor, {
                css: {
                    left: cursorX,
                    top: cursorY
                }
            })

            TweenMax.set(follower, {
                css: {
                    left: followerX - 21,
                    top: followerY - 21
                }
            })
        }
    })

    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("mouseenter", () => {
            follower.classList.add("follower_active")
            cursor.classList.add("cursor_active")
        })
        link.addEventListener("mouseleave", (e) => {
            follower.classList.remove("follower_active")
            cursor.classList.remove("cursor_active")
        })
    })
}