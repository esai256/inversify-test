# inversify-test

Trying to make use of inversion of control with Vue JSX Components

## Pre conclusion

### Inversify 💔 Vue with JSX
Because injecting stuff into classes doesn't work if you instanciate a class instead of getting an instance via the container. Sadly first of both is the way that is used when using JSX Components.
In Addition the decorator which inversify uses `@inject` kind of collides with the "native" one from Vue `@inject`. Right now I even use the latter instead of the one from inversify as that works with JSX, with the caveat that I have to have to manually get the current Component at the point I want to inject it from.

```tsx
const ActualEmailComponent = container.get<interfaces.Newable<IEmailComponent>>(IDENTIFIERS.EmailComponent);

new Vue({
  el: '#el',
  provide: {
    //here is the injection
    EmailComponent: ActualEmailComponent
  },
  render() {
    return (
      <div>
        <h1>Hi. Below me begins injection.</h1>
        <ActualFormComponent></ActualFormComponent>
      </div>
    );
  }
});
```
