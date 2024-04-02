// MISE EN SITUATION

// Dans l'application X, les utilisateurs peuvent configurés dans leurs paramètres le mois de renouvellement de leur assurance habitation.
// Le mois est sauvegardé en nombre entier [0-11] dans les paramètres de l'utilisateur. 

// Nous voulons maintenant ajouté la fonctionnalité suivante dans l'application :

// En tant qu'utilisateur, lorsque je me connecte à mon compte dans les 3 mois précédents la date de renouvellement de mon assurance habitation, 
// je veux voir une bannière qui me rappelle que mon renouvellement est dû bientôt.

// Si l'utilisateur n'a pas configuré le mois de renouvellement de son assurance, on ne fait rien.

// On considère que la date de renouvellement est le 1er du mois et que le renouvellement doit être fait à chaque année.

// Par exemple, si le mois de renouvellement est juin, l'utilisateur doit voir la bannière durant tout le mois de mars, avril et mai.

// L'utilisateur doit avoir l'option de ne plus voir la bannière jusqu'au prochain renouvellement.

// Dans notre exemple précédent, si l'utilisateur ferme la bannière n'importe quand durant le mois de mars, avril ou mai 2024,  
// il ne doit plus voir la bannière avant mars 2025

// ---------------------
// QUESTION 

//  Complète le service suivant : 

export interface UserPrefs
{
  InsuranceRenewalMonth?: number,
  RenewalNotificationPref?: any 
}

class InsuranceRenewalNotificationService
{
  private readonly NOTIFICATION_PERIOD_IN_MONTHS = 3;

  private userPrefs: UserPrefs;

  constructor(userPrefs: UserPrefs)
  {
    this.userPrefs = userPrefs;
  }

  public ShouldShowNotificationBanner(): boolean
  {
    return false;
  }

  public OnNotificationBannerClosed(): void
  {

  }
}



