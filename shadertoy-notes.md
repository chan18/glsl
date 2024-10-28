

# normalizing

```
    pixial-coordinate / full-resolution
```


# Drawing circle 

 take a point in the middle 
 for every pixel on the screen calculate the distiance from the point we are intrested in. 

 if the pixel is far form the point it is not part of circle otherwise/vice-versa

 ``` glsl

 float d = length(uv); // distiance from origine

 float c = 1.;

 fragColor = vec4(vec3(c), 1.0)

 ```


 