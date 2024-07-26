### First Project Javascript : 

## 1 - Consignes : 
- Créer un dossier sous le nom : first_project_js_prenom_nom
- Créer un repository sous le même nom que le dossier  
- Respect de la structure de dossier 
- Travail individuel 
- Un minimum de 10 commits 
- Date limite : Une journée 
- Utilisation de class d'objets , de tableau , fonctions , prompts ...

## 2 - But du projet : 
- Créer un programme javascript qui simule une connexion à un compte bancaire en utilisant uniquement la console pour intéragir avec l'utilisateur .

## 3 - Instructions : 
- Création et gestion de compte : 
    + Permettre à l'utilisateur , via des prompts , de choisir entre s'inscrire ou se connecter ou changer le mot de passe .
    + Si l'utilisateur écris seulement "exit" , il sors du process dans lequel il était , et on lui repose la question du choix .
        * Si l'utilisateur choisis de s'inscrire , voici les informations qu'il doit rentrer : 
            # Name ( Complet ) : 
            - Il faut vérifier si il n'y a pas d'espace au début ou la fin
            - Il faut que la 1ere lettre sois en majuscule 
            - Il faut vérifier qu'après chaque espace, la 1ere lettre sois toujours mis en Majuscule
            - Il faut vérifier que tout les autres caractères sois en miniscule 
            - Il ne faut pas enregistré le Name , si il y a moains de 5 caractères (sans compter les espaces)
            - Il ne faut pas enregistré le Name , si il a mis des chiffres , un @ , ou un caractère spécial du même genre.

            # Email : 
            - Il faut vérifier si il n'y a pas d'espace au début ou la fin 
            - Il faut que toute les lettres sois en miniscule 
            - Il ne faut pas enregistré le Email , si il y a un espace au milieu
            - Il ne faut pas enregistré le Email , si il y a moins de 10 caractère ( sans compter les espaces ) 
            - Il ne faut pas enregistré le Email , si il y a pas UNE fois seulement le @
            - Il faut que l'email sois unique  

            # Age : 
            - Il faut vérifier si il n'y a pas d'espace au début ou la fin ou au milieu
            - Il faut vérifier qu'il n'as mis que des chiffres
            - Il ne faut pas enregistré le Age , si il y a 0 caractères , et si il y a 3 caractères ou + 

            # Password : 
            - Il faut vérifier si il n'y a pas d'espace au début ou la fin
            - Il ne faut pas enregistré le Password , si il y a un espace au milieu 
            - Il faut qu'il y a au moins un caractère spécial du style : ["@" , "#" , "-" , "+" , "*" , "/"]
            - Il faut au moins 7 caractères pour confirmer le password

            # Password_confirmed : 
            - L'utilisateur doit re rentrer son mdp exact , sinon , il est bloqué

        * Si l'utilisateur choisis de se connecter , voici les informations qu'il doit rentrer : 
            # Email :
            - Il faut vérifier si l'email existe dans notre Database
            # Password : 
            - Il faut vérifier si le Password est lier à l'email écris auparavant

        * Si l'utilisateur choisis de changer le mot de passe : 
            - Il doit écrire son Email existant dans la Database

        * Après la connexion de l'utilisateur et afficher le montant qu'il a dans sa banque ( aux choix ) , et lui proposer des services : 
            # Deconnexion : 
            - Si l'utilisateur choisis cet option , il est déconnecter , et on lui propose , comme au tout début , de s'inscrire ou se connecter ou changer le mot de passe.
            # Retrait d'argent :
            - Si l'utilisateur choisis cet option , il a le choix d'enlever de sa banque un montant ( qui ne dépasse pas celui qui la ) .
            # Déposer de l'argent : 
            - Si l'utilisateur choisis cet option , il a le choix de faire rentrer la somme souhaiter ne dépassant pas les 1000 dirhams .
            # Prendre un crédit :
            - Si l'utilisateur choisis cet option , il a le choix de prendre un crédit à hauteur de 20% de ce qu'il a deja
            - Il reçoit donc 20 % en + de son montant , mais il perd 10 % à chaque connexion , jusqu'a arriver à la hauteur de son crédit .
            # Investir : 
            - Si l'utilisateur choisis cet option , il a le choix d'investir dans la banque , il peut mettre la somme qu'il veut dans l'investissement .
            - A sa prochaine connexion , il recevra 20% de ce qu'il a investis a chaque fois , jusqu'a arriver a 120% ( donc il gagne a chaque fois 20 % sur chaque investissement ) 
            # Historique :
            - Capacité de voir tout l'historique des transactions faites . 


