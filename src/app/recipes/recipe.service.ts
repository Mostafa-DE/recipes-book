import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.module";
import { Subject } from "rxjs";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Burger",
      "A really nice Burger ready to eat :)",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
      [new Ingredient("Meat", 2), new Ingredient("Cheese", 3)]
    ),
    new Recipe(
      "Sticky Beef",
      "Get ready to test the amazing sticky in the world :)",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUExMYGBYYGRoaGxkZGRoaGhwfGxsaGRwaGxocHysiHBwoHxsaIzQjKSwuMTExHyE3PDcwOyswMS4BCwsLDw4PHRERHTIoIikwMDAuMjAwMC4wLjAyMDAyMDAwMjAwMDAwMzAwMDAuLjAyMjIwMDAwMDAwMDAwMDAwMP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABCEAACAQMDAgUCBAQDBQYHAAABAhEAAyEEEjEFQQYTIlFhMnFCgZGhBxQjsVLB8DNistHhFhckU3KCFUNzkqLS8f/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAAEEBQYH/8QALxEAAgIBAwMDAQcFAQAAAAAAAQIAEQMSITEEQVETInGRBTJhgaHR8BVSscHxFP/aAAwDAQACEQMRAD8A9S0/TADLZq+FrtKauSKlSpVUk6a5NKuAVUk6xpUjXDVyR1cNcU12akk7TXrpNDep9bsWFJvXUQD3OfsByTUJlgXxL4NKazXSPGdrUXhaRHAZZVmEbgZyB7YOaPG+oIBYAngTVBgeITIwNES1NNdqE9Z8QJp1khnJMBVEyYmJ7UDbx0AnmXFRRj07jvzugEFYB9J/f2oWcDaEmJ23AmvFz4rlu7WG6L/Etb29rmnNu3b273VwwQOYUkMF3D32yRjB7FNR1zzX8rTOuV3FzMKo5Ofas+TKyURuIYwMSQdv9TTm4KqdR1uxJWJqnorw2sofeUO0tIM4B7H5rzrxD1+55tyHMBiAKTmzsyaRsSPoY3B02pvj9Zvl6wBO514oZr/E9i1IcmR2AyftXlnT+r3bd4sxeGncM5B+/ai+r6l5moQKg2kDaMZ+ZPPBrmN9k+qB6uQmuPzmwYlDbDaeidK6vZ1Am20+4Igj8qtvYU8qDWJ8P6y2msKhQkrt5GZz2rcK1ed6/pf/AC5iik12lMCNxKOp6JaflY+2KGX/AAVbf6bjKfnIrRTXQaVi6rJjIN2PEJOpzp91jMhb8FXQfqDD4MH96tafp5tEgqcVpJrhp2Trda1W/wAx56/M2z7j6QXa1Y4qXzat3dMjcqKiTp47Eis+pTxFeoh34jFBNPtaSTPepf5YjvSUMvFUCAd+IJe/umRssYpgOae6scxXLVgzJobEsEVvJaVdilQQZojXN1ONRkV9TM40lFcio/Mp26oCJI6lTQ1OmpJOE1yaqa7XJaANxwoLBRPdmMKo9yT2rI+KfHYtnbYhl4a4CMFgduwQd2QcxAIj3iiwHMNMbOaWbPVapLalnYKoEkkwB+dZLqX8Q7K2fNsw39UW/VI9yXgZIgTGO1ZXS9be8iq5uq77Uc3A1wO0YdNx2JJIlYx2+bOq1QN1f5q0621Zk9aqTcDAwFaPQPR9XInnk0psh2qak6Wj7pPf8bak7kuG3lmCsgIG1e87iYPb7d5odbV71g3LrIUDnn6uJ7525/WiOq0gt2ikIgueYloF4G0wwHeM44G7n2oTq9UNHbRFZbiXAWuL6grESAp9tpYjGDtWaB1Y8naaE0KPaN4y9eGntBrYh2cNbuI6kFVEMrKRKgEggYknPFN/7QXdTets77dq7YUdyMv/ANKzes6wh2iT3kEzBntjA496oaXWbru4D0DGPftQkHTCtNX4mbEdUFu7dVLty5mWdztGz07j9ShVIgTIYkGDkChnUtf52nLwqhXRdqAhfodgMkn0lnAJ9/YUN6ddZ7rDHrUggsUX1DZLNyB6h8URu6S4ti5YS2HK3C7bJeR5ZAKkfUAA5kf4ieOGVawQaa5X6OlvyWdwDcLeWnpMKTDKWOBBg5mRBxiauayzck2GZbTWywuPLAIiAr5cj6lI2jOSRBqh0h9yMqWmuMNpKJksPWA23J3LuIkAwGP3rRDS7LLam9c9Nwx5Zh7jRsNtLrZKj+kJHPueQYxAG8o2DsdpX8LeKPIVrNpnYTLKy7TtUCYGYOWnPAnHa0/Qlvnzw21H9QhlJ9oIkwZ5mgHi3pz2b/nXHW1eYqy2gpJgBVWHUFSRwZjI780+xrS1lnG216gFtopCNzJXtIwD9xWfMhqxsY7AVPH5ybxFpb4RL15hsylraMnaYYH2indJjcpC+YhwDAlSfvxmndJub1DXWACEsouFijg/UABwR3I+Kk6HqrlkF7QtFWbdBjeREMFB7CmKtKCZRf3EDz8SXXApqQYKgbTmOI+MV6Hp9TIB+K826zDBL63J3zKnlYPFLReKb9tow68AEZ/WuL9qdC2dgyzXix+qukcieni7T1uVldL4mBUFlKn9aIafraN+KvN5OkyJyJT9JkXkQ5upbqqJqgRM1ILo96R6ZmY4yJY3Upqhrep27SlnYCFLRImByf7D8xU9u+GAYHBAI+xzVthcKGI2PBg6ZaD0hcqj/OLuK7huAkrOQPeK42rFVoaX6RPaX91Me4BQzqPVBattcIJCicVher+Lrt/0WwUU+31EflxWrpuhfMduO5hDF5myveLLCkrvGMYrteZbTSrq/wBJw+THemvifRIrjCmWQR9VS17Geeld0mmloxU5Wor7BQWbAAkn2oCviScBiuXL4Ak1BpNfaug+W6tGDB4+4od4l6smnsXHdh9JC+5JwMd6oHT8QgpJqefePeuC/fEMxCBjbQLJnADGT+IgjgkD71V0CWzpmm25vMzsTO0AiWddmfSCDk/tQq31C35/mOoYHeSDwfT6DIEiGj9veoNX4gdi23YoyMKJIk4+2ciBMClsSwnTRQgqFbvlKVV7t22zHcy+gKvKkgiZYDv8nFWvFGtVDasJtukhn3YX1NG0hZheOe8n3rFay6O7bsc5HyRn5Jqpe6mxJzz7f2q1WxVRb5NLXc1Og1xuXF0zW7pMQApD7QxDvsWI9RAO7t+9P8fPqFO3yXTT7m8oEiCxEs2IJnPaOYoD4e1d6xc89GKsVK45gxOe3FHNX1trq27VzdcAIIUkQpMcd/y4zVHVq0gbQwCV1MamO8tmIBnPxR/oGkKD6JH+8Qv/ABETVnzhzaCkSYIzM9xM9sYJpO/JIxFBlKkaTG4MJX3jf5kXVEUkG2IYHO3OIjtWnXTWzatXl1CqSiEvcyu9S8qDtiTuYGcD85GK1OtH0gAkkcffiidvrD/y/wDL3Y/pXdylhuujdIYZkQFOIiCq/BpuNQiUd4jK+vJY28yWxr3s6tbqMQ5Yq/Bw3ome52mYIEGMVortshV0dxreLcu7GSYYsoTaILhVCk5JJcE4oFYaw1y0LIZYkszclhJByf1/KtNp7Fq6VvXXcush3uXDFsiTbKQdzSxXGY9WO4UXLCpp0Ku54/D9JmdT0e1DXVt7wAVQtO0sfplWJnAJjgSJoPresMzFrmSARkCOwHpAxAH7mvR+h6Rke3bYLc2r6ywcWkthYJ8zbILKAY4wRiaCa27YuNqLi6fylcDYQTI2naGj6SG7gcSc4qWNIswa950D85k+la7YquQrWt5lDJ5HOI/vRbpumsXrnmWtyczbJMieCpPImrutv6e8untFRagRduASpYQN4Udyo/Vj96yvXL3kXglm6HA2kMvvHAqMC33T+0q9H3x+8O9P6oq3HtBCxIK/T6iQIA+00E1l24l3bOxhyDgz7UWRwwGoA2X12syxEx+NT+mKteKdYDrdzIrXFsqrFireoid2IGAYk5okpltu0t3ZDSHmSdD6g3qS/aJ2j6gYIPs0irF/XWlCkyJicE+//Kquna4Ljq+1iYUq0NnBJUqfiNwPemeInQaa0Vg3PMKOs/8AqIaTwYAHtzWR8GMsCV5P8uPHUZFH3j/qEtDpL2ps7/OS3a8wIN24FifwhRJYxmh/VOtvZe5asXWZQdqkjaABjCnINBdHrr1oMyyoOPcAtmQeA0DkZxXW11suLtxdyyu5QYZjtyRHaRng5p3/AJsRXTpEztmbVqLTvk6hlN65cYrdMEHJZUMnPYAivUhqWW0jKvp2rHwIxXl/Q+pE3QW9TMwVVMkKk557Vp/F3jtVc6ayVFvbte4vqIJHCjiRx+fxXM+0enfPlXEi7D6QseQIupt7MrJ1xrt9nQwyuQxkQbcAQAcmCJn5rYaE7gDyfevM+laV7jKdKs7RlnI3FgckDMAyBGeK1mk6u9oIXTaCSoZngQkeZIzJ5Aq+t+zGcKMdbCoxOpUqb8zZ3dOHQqRggiq3Tel27KBUQCBExk/c1W8L9VbUWmuH6d0IYgxAmfzooa8xkGTCzYyeDv8AMreD73QLLEkoM/Fdq7NKq9fL/cZVt5mwYVGZqQmg/iTr9vS29x9TthEHLGP2Hua+kE1uZxFUsaEs3uqWVDbrqDbM5GI5/SRWE8Z9UfU+hNQLWmPpkAtcvPOVCgE7RVJ9VbWwdRfYPdm5ttzBdnaTIB9NsHNReELLai+L95lAWERgIAcjCqs5wT75j70stuAJtTpwoLHt/NpVsaC6gXTad7UTue5vhjugSTGSPbmhPiizcWD5tx0G4bmG4HEyvcLOJPFE9VrbdjWk3EYrDK6ME3DGPpMbpH6d6uanUpe04uMkB7V3yrSlnCbTDuygyoOOcCai0xN8wnBUCu8w+tBhX9mxmTHHHtXOn6YXGuMQIFp2BkASAQJntJ7Z9qt6eyiuA6l7YIESVkBs5GRI9s1oek6Wx/MXUCILPoEBnKMN1viTLZG6DztPFVqA5g6GbcTAfybXSWjauTgYHwPinN0l7VzZcBDezAgjvkH4zW78R9Et6UMEuo6kzCggjHHEHtke9Zq3qHICkGH4YrzJyA1KGRiSI0YUAVr5lTyiPTOJJE4H3qz0q0fOQMGO7esKPVLW2AYT/hkN9h25qfycHEmSYA9IJydo4AHtRLwvqfKu3bm1SyWLmxmzDHasqJAJ2ll5749qJcltUe2IBC3MzGhYAwvAn/UUTuEE/UCY7VzpPSyD6sk9gJHOeP0qxp+iPcv+VaQuWMDMDE5J7DvmkPTNsY9ToTeAzpd1z1YA5z+wopomB3Mbakufq2mFYksdqqdske494A5rnUuni220OHUOF3YAaV3bsnC8c9iJAOKsWdSr3AUXbCKpEAAsNw3CDEEbc98nvTyxCbTEiqcm45ljw3eFvU2ixEboypYHeCsFQcgls/BNXU1R8skkoAy3VG0sTBYKk9iAZkns3eKi8PaW290i45RUR3JABaBAO2cbgDIojdvJea4Tbe1bxtVFDQv+JwzDGVMjGf1W29TV5AHFSLp3WXa1c3WYtNc9RVY7ghEck+qTJWOAK12nsG/bt3EvJZvbJt2yBhbhbau3cB6tpiMxOczQW74RFvTNetu6rt3lHyDBItuIUcg5B9+e9UtP1wNZuecSbdsDaogkzuKId2WUOAROFz2xTFBU0REvTrqQ8HeN8U+HRZG5CzMrFrirBtouY2PtBkQZB4/KsZ1XSguHGZUEmMAxPaiI63ce2La21BkLvUtugknAmSZI47YiDTkS5bUXQ21rcm0SApG45IUj1SARkk4q2oEGDTOCDvCOh6EyWpu3rSu6KEFy6myLk+tiQdpERtAxHzVe10m0NRcsQpdbaP7S2xGdd0ziXgd8VFp+g+au3zkVQdzFnUDaVkFUwzNOP04oBqW8nUMEuE7GhW9wD3zH96uww2iQSrb/AOJu+nMLG0vbfy1cuNpKNKym5HjMZEcHg/ADrwBD8o7FrjKR9J52zAkeojgfYcVY02ovFRd22vKZhbaGYLuYbiTub04jIMTHY5F9f1JbcyKNrblBlmJWREkmBERI7UkWG0n5E0PWnV+Rgtb7XEKbyAgkSMc/T+s5qnpLDMwzUraa4YAVjjsCRjP7DNLS3CpwJzTySQamZFXUNXHeE9RpyiyhO8naAMk/b7CjGl8DC7ZFyxLll+lm2MrqAWBxBB7cfepPDtq/e1CXvIUC1JA+QInaxzJI5gVf634hd7ilk2EktcVZEtATsZKwsUKUikneO6hvWyAIKHzBfQ0WyVQh7Tl9xaCGURABnn4+9Q66w5t3y11vQBAJ+rcYIzx3rZeH+kDzGt6kw9xA6KWl12gAlvaQQRPsab4l6e+k09q5ZjbcPqUxcliDHPb7VK21NFMwDaFjP4ZEjTeoRuyJJ9QGNwB49se1axmxVXo3TE/l7Nt1Eqg+CDyYI4yav2tEiiBJ+5J/vXgusyrkzM3kzUGAFGU2vD3pUQ/l1/wj9KVZta+IWsSl/FC5dFpClxkWTugkTiRJH2rzvqF51gtccgj0sea9h8T9NF+w6mPpPPHvmvIeoaYi1AIhY7+3BBr6NlSzcy9JlAUL+Mm6PdUpcVWC7lKkxOGInd+kVd6Nqr2jVX8u55dwkjaBBYAgMJBAx8ZrL6clAxMwACYicnv/AM61PRvEIa367kLtKkMJGYGxS0xj7UjFjYNd7TZmYFePmLrWqbUbby2921C7G6QDKsCQkQrAyIAHvQPrutKsdPasixcO4swJLMtwBwrE9gPb7VZ6xqjomF21eLbydtq4nY5PBjbgcRNVbXR7l+0OpXbhjzlTasM8iFT0tgKHABnsSYPB1afP5zE+Tahx2lfpT2De8ti7205cCGKkSG2z/iiRMx96t2bzK3+zkNIgkhZggEkEbomeYNUW8P3LF3y1Yte3AnAW0dyh9ocEqMbhmJjFC9X1i+lwksyHGD7fY8igdC3EPFnVFp5oOtoqsNt3em1fcEMwJZVUzISMnPb7UM6r1tLl9Vsp5docCe6yfSYED2Haquv1a3Le570xOAACZ9oH2x96FWWUXLfqnOTGATxHuKvGuxEXnygMO80+mvS3PMEGjnQOl3Sty4VmztO6NuQIbdJI2qvJM5iIOQM/bA2AmOJ+c8itT0XTvc07ol0+ULaM4yV3yzDHYCADGSQceygoDXNusnHQlXTMlsBSVcuoLFCYJBP4oyPxYHB7VHZv+UjXt+0tKrtgmRBgCZ4O3MDOSKltWFs2X9KkQybiOJ2nchPDCB9w1RaDZaPmhXuMu5tpUKEViQGbcYJkjBHJHegCrYqGWOk+YK6nbZbEtbHmXQb0YBS3a3DAPCnB92CiZqhY1O8s5/FjHGAAAPtil4k6vcFxyGZXKvauYhgpIUoSRyQMkdu5k0N6ddlOeP8AnWnT7anO9SssL2bp3SRujtkTHYkZ+JFega3q1q8m62mxnnf6fXcVhuAAj1bQsYPua8+tagA5wYjOMjkVqPC+ulERG3k7oQovobfuw0SQfz5paAkkcTW5WgealbrfWkDnadwIaVCkKqnKWyW+raQCcdgJxQBmW8ds7cFnYnvJOPbG0RJz37VL1y+P6hcQZJ4iDmRAwJNU+iaRLqF3JnjYJBPYMWKldoOY5z2pmksPEz5cgQ6eY/T6G7a2EqAuGkw3cwcYDEqRB78xzWs6O9jUB21b+WdttECyoP1FyQFYAE5MLyZgZqDUdUC2Q9pV3loXDP6WXzGZleQLg3Rgkepj+JpgfQ6gWP5t52XHAQ+n2jzV2CEUMoAGJkRRtV7RWOwKbaAtbbuI7bStxFubCbbSHBPKEgGOBujvQLUhg8MpDHMHkzwa1WkZGv3Fvg7ri+nYwW2D7tg/ijAxlvihlyylu++0g7W2ziIBIxGIxFLDBb2huhdh7pL0ZHa2ytCpuVgHDeoyFIkCFgSSxj4k0S6kiWVUXFwrksoIJA3wVnjsRPxVzrfVbFvSWwkFyxZvcGNpEzwYkKBgfvnkuPqkYrnCo5IEyS0GR9WABJzxSvvCzsOY/wC77bs1UJ9U6xpE3rpNxtuFjzPrQht2D/hMkEd8VWGvu3rRHloQpG14goJJhFBiM9hUnQ/DarJcyZgGe32jFaO4mDAVREekADiO1LbMAaWMTCxA17TPfz2ua2dvm3EbEhCwE4kd1JiJIzVjQ9W09wOdSHFwLtRVBKKq9gCcMSDmYyavqzqG2sQGG1tpKyD2MHisz17pZO1rKgQoUgfigDM/4j3J5pqZlO1/WKyYGWzV/HM1/Q/EFpb+obT2Lezy02j1SAWXdgyZ59MjiovFvXWa7Y/8Qt1IFwJwUIP03AB6TOPyNZLwx4jvaNbkWlJuYl0k8cCcAVQshnZmY+oyxnE9yB80bgsCp4iUKggjmeu9I8Wo6MzCAgXcwyo3GBJ7SaNWeqowlWBB7gg15PpOmXAlu5YuObjAqwAG2WZlCbpgHYA0Ed6j0+s2sUDuSvPpC7QIEEA8gyCe+K4HUfYSEakJ/wAzQMilqM9d/wDiC+4pV5b/ADD+5/euVz/6UP7o6lnu/VlPltAnBx714zdc7ihG3BJUA4AbGPcV7c5xWF67pNImqteao/qttwT6iwODHaa9swJnFxZAkxnTtM+p/p2UyBLQAJ9+e1XND4PvXW9dpgqzkgfbscV6f0foNqxJQAT8DiiwXvS/T/GNbqmPE890/gSzKt5ZdhAJYlscd+McUK0vSv5XqRtB/LswLg9ifLeARwWmYx9q9Rv2TymD3+a86/igj+fZ2SpbbuYewY7fzB4ircAC5WBmZ9J7ymfJWwl6+zMzhjtVA2TDgFWOcdj/AIfvOA8X2WfbqSHm6zzvVh9LQsE4PpjA4Aoxq7OpEtJ/2ZuKSZDcgAff1CDyN3NBesay/qFCs9y5t3O4yUUAxKqMKgEScUOMmt5ozqLNbwOmnBxwQMz71cSyiqFZFLgbg0ngxiAYn/nUX8q49bIyqZjBVSYH0k4PyBU2i05B83YfLWAWMektIWR8nFHfiZwK5ELapYXlSDgZz3zH5f2rX6fVi8w2ulpCn0rtDbCoxlYw2+CRPf2NYiV2jJJGfg57DuIot0jWadN7Or3LiqWtD07CUWYiCZngiAM9hlDKzDSDU3K4G5ELrp7Je2Gs3Wuv603kjd3U7Tg5IIMUI691g2UuIwHnXHBuoy4VUE2xEn1SS59jtwINZnqPX79y6XDHdMyJ5IkxBwOfyqlqfOuEOQW3kkRkkyJMDPJ70SY9O8U/Ug7L/DLz9Ju3oe5cCliPrJJM8fsOPiiGh8MsIU3EDXCQqkjMQMx9MyMmMZpabrF+22xDCuwBVgkM2VBO4YjcfViJNR9dvXma3auEFlVVUAAgFjG1iADJgk/VzjkmjFmCy4137yvqARIcHdJycme4PzNaPwH1tLDOl3YUuQi7zCqxgs5fG1QAJEyZgc1l9X1ApeW7KsWG4qMgEFrZDA8Mdm7/ANw+1VE1RJwC3Me8CT2+JNEAQYv1VI3hjxLrFbdbXbcztF1d4DQZkKfuO3tUvTOoA2bVu07C6hIW0GbbvZ1AdVaV3kEyJHAPvI3RWbmpbaB6FlzhQqKAAzlowsASO57FiJup0G5ZuJcUF7DPK3Aik3FQh5VSTtkDOeNwkwRUPG8oW7WIX0PUrelbbcVWuHcwvD+oCr7g0IdpIJG31EYLSIMNH13xbcu3JN03BbLFXYKrww2gfTAO0LIVQPS0AbmkBqnZ2aFJ3E5MQFkkJjHJBOJn45iHQ77Miqh9f0ATmZ+nGe9V7aomFqfVYWFNFeS5dBJVAS2eMwYBA98Zjn9qnUrAVwbTFiVDNiNrZlf97jke9aHwz4esWRv1N8LudFNpVZnIbuRG308945wQBVP+XRdS8E7Vb0xyIJgz+U0hmCnV2qaERn2OxuC7GivaiWJVdgkLMM3JJVeTABJ9h+QOn8H6/T2LbWL1uTcMMwYALtmCp2kySZ9oiu21WcKDClWj0mGEcwcwSO/eay+vtOtzMGMSOYgETGIAge+I7QFq4yChtHZcXpEFt77zYa3qBg2rRLWhBYgZ5UuwMT2HMj44qfSdUso+62iOmV2XAzwJb1jjJx9YMYjg1P4TtLsW8jZSC6H1F90qAq4EZHc/5VX1HhospuadpYzuQgd8kDHbP+RpQFDaPbIh2aRLctoWNy7CEyConcuSdo7HEQe/2qF9Hc9S7WI3bSVGOJjH4oPHOD7GprXh648Wr0eWTH9MbiGKmC0Dd9hz2xmjHTOhXGtCzaDAkz69w29w5xtXG4YHfExNF6drxvAOUA87TCarp7sd0bgmOQI59UctxzUejPqNljCwzfTncFaBMTn9MzWst6drJKelbisD6hIMZ2kgztPBAjmgXUTcOpW+9kMWYkgTtuFfrIM+xBOcc03GwYUTuJndSrWBzH6bReSSHvEQzFQuRK43FeMjcBnn4zVVGN5yx/xAv3Lf4RJHAAAiaL+L9W87Clr+oLd1DbULCkMYI9zOZJ4FD9ENqAdzk0xgygiLBDEGEPJFdqt5xpVg9Ax+ueiaDrGo89bXmoFYES64mMcEZo5e8OK5RmgshDAxmR7UL0VpQQxUEgg5+KOdO6wrllI2kZAmZHvXcYVOCIUtLAj2pwpq3BXWalmMjNTeCKWPAoT17pVnUKvmDK5Uj5HzyOD+VE9TdUfUQJ96yvijxbasowHIETwRM8DvSHPupjsRx3uOxhr9vMxnijzNLdFu1dw6yeQYBODGIJLfFCum9JteXua6STuUW1IG5Qm8tI7Kdnp754iqGq1VzU3LzMQoKM8OTBABhQY59UjgYmi3StCj6e0otkMwglztG1rtsbldsDdBiAfxHgRQqpFeJ0SaFHnzOeKGPnD0W/L8o2kVoKoq7CWUmdlyTPJOT8VnPFugsblbTvuXYm5WGQ8S6pAggGB7zuGe5/xWb6lLF4lvLN2GkMdrPtBx9IYKp9RM7h75ovpAQgg7iPTMFSvHGYIO4cZ/c27qpuUuFsi1tMtoNUQCGJ7QT2qz/NqjbyWkCVKHIYEFTPYYPGeKNnwhqbquUtgQGJ3ELlMkKv1MY+O9BtR01Q5AUjMBTk4wTO1SRPEqDRhgRczNjdW0iO6dpDd8y46Ss7mOe8wCR7wf0ovaVrav/RKswaCuOSTkRBEGIAHY8io9KNihjgjGO0farus63cv7d7uwUEAuQSATJjuee5/YAUj1NRM6S4FRBsCf1mU17Dcef7cRMj9f9YrVaw27unsMtoLcS21tmlV4/pgqOZUbeeZMAiTQLU6AksQRI9RxH3H5Ue8PaNgN91vLtEN6yNxmGYDbzmCMe4/JpcKJkXGWcgzN+IejPbFq56CtwQChHI9xM9jmAJB+KZ4e6TevXAlm3vczgnaoBwWYyNoE8kjkd4r0PS+H7rW962gLRC+pxbAAZFBbaxJwGkFRkZgmKb0m/pgE014bFXKEAgXCI2tdAWbhxInk4IAq1e4vJ0wBJB+naD08K3LNjaHtsXubW2lt7FlkAryQgDnA7yJmQc0Wi8kDzFR9np3Q1vaSTtGy4oIEAHgfVjgxw6u0b637jkm2ECJGGVdxYuLcx6ifQvpAVQW5qTTa9LzqQQbjwAzSQrF2gROYD7RM4j7BPUhGWm4+Y/CGXjxAuns2rlzzHtLbRmZiCWAyPTwPfOByc1LY0y3be8BtlpSDBAgFnZcHJ9bFgBzHxRPU2rfmjdtZlLEKYKPtOWLRFws24kEY+wFZrX682FdLVz+ncJtlX2ydpxcO2QueMzzMA5FEtQRxwIx8gXnmFW1ts3XcobYa0LI2wQAwO9mVcycDGQO0xGcW2pvEIAAogkEkE+4n3qO3164qQ2x5mC4JZdxkhTIiSc/n96qW+oMbLwRKknkCJ9h3qOrlaErHkxh7J2E13SLSG25L5wAIkmB8fSvAn7expnXunkFUYJKiQQOSe5IMMREFuPSear+HurWyiK59S5kk4hYVVAMRMn8/vOi0tw5uAAypX15Xjg94+2faOax6/TcL+s2uS66jKHQGNp/MgG2WdTkGATgFcxBYZBPcffSdR6p5O2AAWIUuJ9Ab69sjBPOZzuj3rB6jUbbx2gKjMcL64UmYDHLD784rZ2bDG0fNIJeYkk7VYBDu3fSwAmP1wKcSd1X5mV1GzNv2lbq2uRX2WL7XVDB2YkfUoKyH/Fg8+/zWv03iVGW15RRtxVGDEq68A+n2GTM15ZqNamnu3LT57bxkxgjPtxiiXhuPNbzARB4II55nuD8GhXK6k7UNpeXpkZAbuv1hLq6G473MObjE24gbVloSMAmAeJ795oFr7WIIPlyYXeZXcIlT2MYmD2mYrU9YsgXLTW8IHZA0/iuoQCNvYN35k94wA6qu0ERBAIMkcjFCzlcm3/ZePSyUf+TIaozeyIEn09oyTH3JP61dV5rmrthpUHKQRIhmkSRyce1cSAOQcV0RbCzMoCpYk26lUG+lRaIvWvmeuosCok1RtOX27hEEDmpzVTUW5xWkmcuoc6N1hb1ssARBMqeRWe6p49DG6unVbnloz+lizbVA3EhR6AJ70U6gmn02lualU3G1aYwpI3GIAYTBMnvxWB/h9rLdiy+6zbuC8drzcXftXlfLJMrDHkCZgk4FLeaMKarNSTW9X1V5BeuXURCFa2TaJRpCsVW4oMYmQcg4kc0GPT9TfYGIZjy/oEtwP92YAH5VoLDbFZTC25J2hjsZmZmYuqGJO4wFxwJJyQXUQv4XCAN9ALRuH44P95me1Zsh4qdLDjoGhKuh6crXxZuXCm7atwzAAMFt0HKrEwe69orU9dsK6+RYUHyrS7rpADAKsWzAX02yqXGxOShJjFB7ejRjdv3nKuSCqusBgw3EgtGMgzPzBmRFc8RW7TKGO6EUFYzCghVcg+qA3EdhzUBoE8wnWyDdVK3Xlv27Km7cBJUDYrzsUMGQNzgkhhx39qHaDqpWVMh4IB4gH27qf94cVf63127eswE2oyC1vZlMILm9RtPqIWNoPb3kmR/TLdu62zyyiqDEyXEw0kqmd0bcrA3EgYqyFIi/UdW2P7GbTV68NYvXLu1rjWrVwK4C+YLSknzEU+vDq0GAwGcLFYvUdVKo21kB1E77aiAsMQu1QYCwTAg4J9hU1+7eb0tcJtr6BOQBJgx7xNRanpqC3LANdcqEcH02wphiVWeYA4yJNWrKNrgOrncCdQBlgduc80+1bHOI7R+se9C1vsnwZgzjjHFW9PqSWgfMzSnQg7cTbhzKyjVzFq0mfelqdRffYjEk2/SqxBkx27kwKM+HIF61cLICtxSFP4iGEKTBge57Car+IPEDrr7t+ztV926RtYKfLCMFJw2CRxM/aiUBvyish0nVxcl6F1C8HRVS643rFuN25l2rtMkQoHaYELj2YDdfzRcQG/5p3kx5kgBoRVE7frJMldoxEZo6PxEjXCHJRSlz0pvRA8bkICS2XAJGBOZxFXPD+nueWzHUMjmX9K7yZVdwY7htMECTj1HJyAxqC7mL9Qu3tEP377lQ+oaMr5i3ZV7kKSg2AB2BUKs5k8zxV7whoLNpjduursG9CjAU87mUDkRhRIwTxBrMdb0tuzaW89zzGdg4n2bfuVgGgfhOMjcB2mpui9XYqi2kNx1IYQ0sRB3IAPUQRj/LNIy9gBcNACDvX4cQl4j1NsbUQEbCGmcg/A45AFYwdMuu8tAtkELmCREdoJgTx7QfncJ4bdhevalrZUr6basHZdzDaRt7z6ST798UP1WlWxCuPS6HaPaRtDEHI7Efl9qShbENP8EYca5j8frM+vhotKxKqhbcoJ2jBLEqJ/I+9EdJ4Rsrp/MJuMYbfkbVIEcrzkgYnOOcVKnUxbf0GADKbwrEcgZIMRjsftirnQNYbrrZVN291LqXPr27iYLGchmJ78mMUbOxUbnntBbAqtsBxIvCrWxZa3fwwYEAqrDgjg/f+3tR3Sde09pk3qrhWUjbuUCJOZB4IHpjMiq3inpiWLgZC25/pVhlgPSWP4oJHB+Y4oF4q62bdsqVUbgpRVJC2zE7kG7D++T3waAJqejz9ZbEenfb5qanxBasXCmt090QbgZ0cBQDLEkkkCCQFK8ncIPFF+n9RR7HmKJLkyrDGQZjkFdwaPgj8vE+n9TuO6o7HaWBIBMH5P5V7N0tVDFjcQ2zbLKqsWErELGFwPwjtjHbSwrbgzLqDLYsgfypk/E3TntXzeUHYdr7iOCQJBI9jKz7iOcUX6HqfMd1cKrlVJkEHgEoQeGWSO3A9qL+LNIo0bA+6bTtnnmD27/pWW6Q23YVSHWQYPpIyQTPDAk4GIjuJrHkYAFWm3Fb47HbabBNZatXLe7hNxhgBJ2kAzMfiMc4FZLxA8jjmTnHeeOR+eai8ZdRgJcR/qALKyoQPwqVERBAOYP/ADG6zU3GDXNyuXMuNsMsndIEcQPw4A+9G6aq/DiBiAXfzzKuquC5c8y0hDKF35WB6iJAwB6eBkmCcwTU2qRL1wDTWjkwFEkk8D5J9/8AKqHS+n3dReCWELs8xHEA5JP4VHcn4r17wf4St6UbjD3mHqfsPdUngfPJ+2K6eMe2zOVnchqHaZ/R/wAMpRTc1Cq5HqULuAPtM5pV6HApUW0TrbzM+5I5py55rimJByPb/lUjiFlcj45H5UQoxe8zfj/VMumuoLm1bm0MIndDAgD2nisha0xHluyMz3LaXLShAxK5AfarYnbIHtGM0X8YX2vg2wYAMz8isvoepPZvf1XJOxlXiAD2B4H7c0vKhIsTX02QI3ump611V7rW7FoPduuqAhgVYvBwFJx7n1FZE8Cg3UdP5LC24Fy8QWYMp2Da7KAjSA6tzuj8Pty1vEjDc6qDeKlRcmIBkEADtDERVPVdURbShWe5dIAJeSREwJ42iTAFLVAbuaMnUFQAnEfq+o3GMOyl2IjEFCSJKkHHHb5+IPHw1YBF+8pMKhzncCDDNnJ+kQBwM5BkDoOirct+aS4uApGDBk7iw+wKiOMgzV7X9bvvbG+4qqreW7BQWJg7YBGAY7SZ3GcYU6EkaTt3hY8hA94uarp72WvlghRlT0LCzMETtMg4mRzQfrnSw7l7QZYVgwt2mYNMTLkCATkTMSY9qy/UOp3rTKyXyTAJyGg+xPetbo/4h3rlnYypkHeNlv1DnAlRPvgjHeqXBpN3I+YMaA+syVvqQ3FSpHqPpOcfh7DIn+1W7nWTawdp4hSJBwQBPMZ4nmO4BFbq2m07g+XO/aSNzbIjJ5B3Eg8T25oR07or3gdhJaQETaTu9/8A+RnNWca3qMIZnA0qLi1hh3aAg3fQW9QkbphjuI+TU2kaOI4n8s1c8T6BrjJf/qNbKhdzAyCrNKk8MQIyD37cUFawBO3I7FpB/QH/AKU32sJn1ZEayIUtySvltLMwXb7EzBA7jGT2ke9O8ZdE/l3tBWLB0LEexUwT9jzQzT6hw4O4Wz2aAAMbfaASO/uZ5ruovkk+YwukwNxJY4yArHIHwKDQfUDA7AbjzCfMGxlSN7+kt9F6arqSzRwRjPyP7/pWy6R0XZavKCGIJJhgZRYYxkSuZBAztPtWS6fqbhAXDFcAIBnf6uRyZPfjivTdbpHa7aVLoc+UYPGEhSFbbmNwHtj3FKyK7E95qwNjVVPB8wLr+gNrLyvdm1aVZCpBJOcGYgDA7EzPtRrp3RbNsKERZ9gxG8mAd7iIEfh45qnpuoBLJd1kF1CY9aFWO6A2D9JBUjutDtd1lkO1S0kAyykNLCSYPbIPzWI+rtfHiOGNd6h/xB1V0ZEKqqwLa7Wb0BhGIK4j2ngZ4rK+PbYtXIa4rkohlRHHojHwoqt4k6vlbbsMlQSIxMd/iT/1qP8A7T2bYKW7KZb/AGhVsxtkA75gR7c8VqxYmdtTHaZsmcYxpUbzP+c6sl1kYITuBKwGAj9FMgTHeRJFE9B4o2Xn8m2qC4/ociSnAwRkJj6RwCRJxVPr94XXcrfdwF3kMwYZb1AYEgSI7iD7YH6TAEkAEzHBwdoAxzk8mtjY1qpjXK+q75nqviHpb+Uuq1dwI21t1v0i4NrsqFFmGQgqckEzH1NXk/XOqNeYThRgD9K3XTepaXUI6alzbZlREZFlLapEKqySowMDHPvWO6x0pLeoa3buC4AfqAIB+05j/WaH00U64xnyMui9pU6BqltXldu2QSJAP2re6fxgttAy7d7gkhZAIBZdpWYGJMrHJkZrHP05FUMwJ3EgYwSACRPuNy/qPeoLdyFg8CSB9/b9P2pbIMh1RuMtjXSa/nmbDV+Kr19I2Oyg4UZ4BJmOMSfgAntWY1HiS+jFcowxBj96kOuLBNrEMgwwJWBiIiM85GTPxVSx069qr223ba5cf8KLk+5MYUfJgCrTAniBmzsopW+kjPX7xRre4kOZM5zPIB4PzR7wV4N1euO7c1vTgw1xi2z2hFkb27QMDuRwdn4W/hVbsr5usHmuOLFs+ge3mPjf8genn6hXoWh3bAGVUjAVfpVRgARjitARRMTZWPeU+gdCsaS2LVhImNzGN7x3Y/5CAOwoqtciuqtFFx0GlT9tKqkgi5BqErBlcfarl6zHFV1Q9jxQ3CgzqvRrGoB3/wBO5/5iD/jXvWQ694TvWllk8y32uJ6lj57r+eK9BuWuQK5aLq0gwI/f5pgfzJPH26IkemVqjqOktPpbIr2LqPQ9Pfy6eU5/Hbxn5Tg/3rMa/wAD6hJayVvJ/uYf80P+RNWdJlAmYHU9RvIuwxA4wMfAjio73Xi1lrTwRIKEDjJJmcmZNGuoachilxCrDlWBBH5HNB7/AElScGhbGDGrlZeDBz64lQpclQZ29p966vVCPePY+3tNTXumEdqqXNKR2qtEHWeZdTWLcbIEZx7f9a3nhg29OGJBN0owUTtUIyxvMCZmY7fea8yW0QZFbTw71q3cMXV8x2VLYQiCNsgbNpBZm3fJkd5ApGTH3E29NnAsMOYX63tFgkOu3cLiCGKs7czbMKVPEkY2mIn1ZGzph5ha4m1N0EAQoaCQkc9uKv8AiPqPmO9qze/poCWDwjMVJkZ5iML/AHJNUun6mDaBJlWLFJZYaVGZOD6Q33nihVbWzHPlBNDm5X6z0dhtuEQr7tozI2kTM980M8o23B2yR2YY/St91BboDu9m2+6DuKb9ohR6GHpVTHK8zmgniC3dP9W6AT6QWG3Ht6RRqdOwmbIga2MCnXuPWE2nEENEn3wBFEeleJtSpUhzAXYN0t6DA2TyF+AaG63WHy9jQy+rYcAj1cmPtEGp+n3LXlLteLkepSMcn6T9tv6n2zZBq+8FWAIW9pvPBltGIZ7gZ12lBugjJLAIfSZnPtz81U6hYN/UXGUbiWJ9IgZwOOABFD+iPeAW4EBENaEqf8P0jbktBAHfIFaLQdNvadHvNAbdDDcAwniV/wAJM5+Kx5SwGw2E6CKOb3PEyvizpDIodSCwnHM9j+dBruuB06qEX64L7TMkSeTzWw6v1NQrNdABjHFedazUNcuFwI4gDGAIH5wBTelZmBsTL1iqlVyZY1vpYbRHHE8iP3qveBDFbgIMksGEMCeZkTThdcpsgRIMwJwSeee57+3sKdq7O7a3cjOO89/mIrZUwlrlRWIMA/ocUY6Molmc/ShbOZIiAJoWdMeePvWk8P8AgjX6oDyrLbD+MjYn33NAYf8ApmqZLh48mk3Bz6yQARxOPv8A6Fc0embUP5dlC1w5W2FZmbsY2ggRzmK9M6F/B2ykNq9Q1xu9u0dq8ZBuESR9gprd9J6XY0yeXp7KWlPOweo9pZj6mPyTQrjAlvnZp5v4e/g85KvrbwtrE+Vahrh+C59K/kD+VekdJ6TY0tvytPZW0p5j6mxy7nLn5Jq3E0rjxFM4iCSYxcHPepahZj3Iipk+1SVEpqa3bpqJVhFqoU5FKpNtKpJB18HvVFjmi728VVfR5kk/6+KAgySAWyRTTbq01n4pjJ8UYklRhz+1QiQQZIjuDE1ZvWQQREj2PeueWfb9KkkZqSl0bb9q3dX2cAn8jGDQHW+BtFdJ2NcsN8HzEz7hs/uK0Yt96ay1dmSYHqH8M9SM2Ltu8Pg7GP8A7Wx/+VZrqXhvVWj/AFtLdX5Fsuo+7pKj9a9i2VIupcHDH9Zq9Uq58+aq1GBmKoh2RgwkEGQRz+VfSGodbgi7Zt3R/vop/uDQ3U+GOnXcPokH/wBNmT9lK1R3lgzy3QdR02puR5Cea9vygtxtq7z+JYKgNugKdw5Ig4oW3TLy221F1kuloBPmlrqwo9RAPEELmSI4ETXqv/dx0rduRbtsj2ct+u4NNUL38JtE2BrNQB7NtYfmAooSI0OOZ5/petqq7AxZSAxUsQN0wUABgjaRzHB+Kde1J1N1kQ22flfT/TVfxejbBbMz7jEnjcf9zuniF10D5tD/APcV3Sfwit2mDp1EKYIkW4we3+0oWU6fbzCGQFhq4nkPUiQ+0gblAUxmdoAn9Iqz0jUadEc3Q/m/gKn05A+ofBHtmecV6fc/g1ZYlm6jJJkxbE/8ddX+DOj/ABa26fsiD+4NXpsUYGumsQH4c66loHYEuSMbhuAJ4aPcED9BVy34sKBhaaTcZy5dVa5BPohogECYAwCT74PaH+FXTrRkXdWx4PqQA/olE9J4G6ZbO5dM7t7vduH9t8ftSfRaqBmodWvLLPJ/FbnZtOII3Bo3Ajn7DAxyKGdL6HevR5Vm5cn/AMu27/8ACDH3NfQVvR2A25dLZDf4igZv/uOaufzNw99o9gAP7U3GmgVM2fKMjap5B0r+GOufLWVtD3uuq/su5v1FaPQfwnsKP/Eaov322kC/kXbdI/IVumE8kn86iG49oA/cd6ZcTcpdK8M6LTwbOlTcP/mXB5jj5Badv5RRa5eZvqJ/18VHbOMVJP8AqKkqVtzewA7Gf8qmGRxTvLmkLWZ/apJHAV2K7tp2ypJGhKkS1TkSpVWql1GqtSotOVa6oqS4qVPilVS5XdJpm0cUqVXKjHSmvbrlKpJI2t1GLVKlVwY1hTPLrtKpJGBa7cX2rlKpJGFBEE0ltx+f50qVSSda3XAvFKlUkndtNbAxyCMUqVSSOE+2PeaeqUqVSSILXQK7Sq5JGuoHzTg0nvFKlVS5MRIrpWRFcpVJUSWwKc1KlUkj9tdilSqSRe3zVhVpUqqWJIq04LSpVUuPAropUqkudpUqVSSf/9k=",
      [new Ingredient("Meat", 10), new Ingredient("souse", 1)]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
